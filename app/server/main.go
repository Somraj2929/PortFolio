package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func loadEnv() error {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
		return err
	}
	return nil
}

func connectToMongo() (*mongo.Client, error) {
	
	username := os.Getenv("MONGO_USERNAME")
	password := os.Getenv("MONGO_PASSWORD")
	uri := os.Getenv("MONGO_URI")

	if username == "" || password == "" || uri == "" {
		log.Fatal("MongoDB credentials not provided")
	}

	// Use the SetServerAPIOptions() method to set the version of the Stable API on the client
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(uri).SetAuth(options.Credential{
		Username: username,
		Password: password,
	}).SetServerAPIOptions(serverAPI)

	// Create a new client and connect to the server
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		return nil, err
	}

	// Send a ping to confirm a successful connection
	if err := client.Database("admin").RunCommand(context.TODO(), bson.D{{"ping", 1}}).Err(); err != nil {
		return nil, err
	}

	fmt.Println("Connected to MongoDB!")
	return client, nil
}

func main() {
	// Load environment variables from .env file
	err := loadEnv()
	if err != nil {
		log.Fatal(err)
	}

	// Connect to MongoDB
	client, err := connectToMongo()
	if err != nil {
		log.Fatal(err)
	}

	// Initialize the Gin router
	r := gin.Default()

	// Add CORS middleware
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	config.AllowCredentials = true
	config.AddAllowHeaders("Authorization")
	r.Use(cors.New(config))





// Handle GET request for fetching data
r.GET("/api/data", func(c *gin.Context) {

    collection := client.Database("blogs").Collection("Blogs_Data")
    cursor, err := collection.Find(context.TODO(), bson.D{})
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch data"})
        return
    }
    defer cursor.Close(context.TODO())

    var result []bson.M
    if err := cursor.All(context.TODO(), &result); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to decode data"})
        return
    }

    c.JSON(http.StatusOK, result)
})
	
	err = r.Run(":8000")
	if err != nil {
		log.Fatal(err)
	}
}

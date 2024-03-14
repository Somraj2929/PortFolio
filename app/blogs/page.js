"use client";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Blogs/BlogNavbar";
import WebBanner from "../components/Blogs/WebBanner";
import { useEffect, useState } from "react";

const blogs = () => {
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://44.211.148.246:8000/api/data");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const allBlogs = await response.json();

        //Filtering the trending blogs
        const trending = allBlogs.filter((blog) => {
          return (
            blog.tag && blog.tag.some((tag) => tag.toLowerCase() === "trending")
          );
        });

        setTrendingBlogs(trending.slice(0, 3));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <WebBanner blogs={trendingBlogs} />
    </>
  );
};

export default blogs;

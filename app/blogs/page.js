"use client";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Blogs/BlogNavbar";
import WebBanner from "../components/Blogs/WebBanner";
import blogsData from "@/public/data/blogsData";
import GridBlogs from "../components/Blogs/gridBlogs";

const blogs = () => {
  const bannerBlogs = blogsData.slice(0, 3);
  const allGridBlogs = blogsData.slice(0, 6);

  // const [trendingBlogs, setTrendingBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://3.221.128.110/api/data");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const allBlogs = await response.json();

  //       //Filtering the trending blogs
  //       const trending = allBlogs.filter((blog) => {
  //         return (
  //           blog.tag && blog.tag.some((tag) => tag.toLowerCase() === "trending")
  //         );
  //       });

  //       setTrendingBlogs(trending.slice(0, 3));
  //     } catch (error) {
  //       console.error("Error fetching blogs:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />
      <WebBanner blogs={bannerBlogs} />
      <GridBlogs />
    </>
  );
};

export default blogs;

"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";

const WebBanner = ({ blogs }) => {
  return (
    <>
      <div className="flex justify-center items-center text-3xl font-semibold md:p-6 mt-6">
        <h1>Trendings</h1>
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        className="container mx-auto md:px-16 p-4 pb-10"
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center rounded-lg bg-pink-100 md:p-6"
          >
            <div className="flex justify-center items-center h-auto md:w-[30rem] p-2">
              <img
                src={blog.img}
                alt={`Banner Image for ${blog.title}`}
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <div className="flex flex-wrap text-left md:p-4 my-2 mx-3 md:w-[50rem] ">
              <div className="text-gray-600 md:mt-2 mb-1 italic">
                {blog.category} - {blog.date}
              </div>
              <div>
                <h2 className="md:text-4xl text-2xl leading-tight font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 md:text-lg text-wrap">
                  {blog.short_desc}
                </p>
              </div>
              <div className="flex items-center md:my-2 mb-6 mt-2">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
                    alt={`Profile Pic for ${blog.author}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="text-lg font-bold">{blog.author}</h4>
                  <p className="text-gray-600 text-sm">Author</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default WebBanner;

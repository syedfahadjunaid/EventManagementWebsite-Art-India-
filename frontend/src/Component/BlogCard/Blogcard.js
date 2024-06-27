import React from "react";
import "./Blogcard.css";
// import img from "../imges/Rectangle 34.png";
// import Button from "../Layout/Button/Button";
import { Link } from "react-router-dom";
import {
  useGetBlogsQuery,
  // useGetBlogByIdQuery,
  // useCreateBlogMutation,
  // useUpdateBlogByIdMutation,
  // useDeleteBlogByIdMutation,
} from "../../services/blog";

import parse from "html-react-parser";

function Blogcard() {
  const responseBlogs = useGetBlogsQuery();

  const renderedBlogCards = responseBlogs?.data?.map((blog, index) => {
    return (
      <div className='blogcard'>
        <div className='blogcard_img'>
          <img
            src={`${process.env.React_App_Base_Image_Url}${blog.blogImage}`}
            alt='blog'
          />
        </div>
        <div className='blogcard_details'>
          <h3 style={{ fontWeight: "600", fontSize: "20px" }}>
            {blog.blogTitle}
          </h3>
          <p className='blogcard_details_para' style={{ fontWeight: "600" }}>
            {blog.blogShortDescription}
          </p>
          <p className='blogcard_details_para1'>
            {parse(
              blog.blogDescription ? blog.blogDescription.substr(0, 400) : ""
            )}
          </p>
          {/* <p className='blogcard_details_para1'>
            public art allows artists to explore their ideas and share them with
            the public. Public art is a way for communities to creatively
            express themselves, and for individuals to share their beliefs and
            values with the world around them. It allows for dialogue between
          </p> */}
          <p className='blogcard_details_para2'>
            {blog.createdAt.substr(0, 10)}
          </p>
          <Link
            bgcolor={"#E68639"}
            color={"#fff"}
            to={`/blog/${blog._id}`}
            className='button'>
            Read More
          </Link>
        </div>
      </div>
    );
  });
  return <>{renderedBlogCards}</>;
}

export default Blogcard;

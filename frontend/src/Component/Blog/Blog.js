import React from "react";
import "./Blog.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
import Blogcard from "../BlogCard/Blogcard";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div className='blog'>
      <div className='blog_header'>
        <span>
          <HeadImage />
          <h3>Blog</h3>
        </span>
        <span>
          <Link to='/blogpage' className='view_more'>
            View More <span></span>
          </Link>
        </span>
      </div>

      <div className='blog_cards'>
        <Blogcard />
        {/* <Blogcard/>
          <Blogcard/> */}
      </div>
    </div>
  );
}

export default Blog;

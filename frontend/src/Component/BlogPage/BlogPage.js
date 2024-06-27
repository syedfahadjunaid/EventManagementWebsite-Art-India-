import React from "react";
import "./BlogPage.css";
import BlogCard from "../BlogCard/Blogcard";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import NavBar from "../Layout/NavBar/NavBar";

import // useGetBlogsQuery,
// useGetBlogByIdQuery,
// useCreateBlogMutation,
// useUpdateBlogByIdMutation,
// useDeleteBlogByIdMutation,
"../../services/blog";
function BlogPage() {
  // const responseBlogs = useGetBlogsQuery();
  // console.log(responseBlogs);

  // const renderedBlogCards = responseBlogs?.data?.map((data, index) => {
  //   return (
  //     <div className='' key={index}>
  //       <BlogCard />
  //     </div>
  //   );
  // });
  return (
    <>
      <NavBar />
      <div className='blogpage'>
        <div className='blogpage_banner'>
          <h3>
            Blogging is a great way to express yourself, share your opinions,
            and connect with others.
          </h3>
          <span></span>
          <p>
            Welcome to the home of creativity, creativity that expresses itself
            through the vibrant work
          </p>
        </div>
        <div className='blogpage_card'>
          <BlogCard />

          {/* {renderedBlogCards} */}
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;

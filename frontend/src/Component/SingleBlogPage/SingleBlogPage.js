import React from "react";
import "./SingleBlogPage.css";
// import img from "../imges/image 10.png";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import NavBar from "../Layout/NavBar/NavBar";

import { useParams } from "react-router-dom";

import parse from "html-react-parser";

import {
  // useGetBlogsQuery,
  useGetBlogByIdQuery,
  // useCreateBlogMutation,
  // useUpdateBlogByIdMutation,
  // useDeleteBlogByIdMutation,
} from "../../services/blog";

function SingleBlogPage() {
  const { singleBlogPageId } = useParams();

  const responseSingleBlog = useGetBlogByIdQuery(singleBlogPageId);
  // console.log(responseSingleBlog?.data?.blog);

  return (
    <>
      <NavBar />

      {responseSingleBlog.isLoading ? (
        "Loading"
      ) : (
        <div className='singleblogpage'>
          <h1 className='singlePageBlogTitle'>
            {responseSingleBlog?.data?.blog?.blogTitle}
          </h1>
          <div className='singleblogpage_first'>
            {/* <div className="singleblogpage_first_left">
          <p>
            Writing one single blog post can be the start of something great.
            It's an opportunity for you to share your thoughts, showcase your
            writing skills, and introduce yourself and your brand to potential
            readers and other bloggers. But more than that, writing a blog post
            can be the foundation on which bigger and better things are built
            upon. It can offer you the chance to create brand new content for
            your website, help establish relationships with readers, and
            ultimately open up new possibilities. So don't rush into writing a
            single blog post – take your time and make it count. Put effort and
            care into crafting something special, and chances are it will pay
            off in ways you never expected.
          </p>
          <p>
            Platforming your way to success starts with writing one single blog
            post, but don't stop there. Keep jumping over the pitfalls and
            swinging your way to the top with your writing skills, and put
            yourself and your brand on the map. As you progress, keep building
            up your portfolio one blog post at a time. Have fun, get creative,
            and unleash your potential! You'll be Mario-esque in your quest to
            tackle the obstacles ahead. Show the world what you are made of and
            don't stop until you reach the top, and beyond!
          </p>
          <p>
            Platforming your way to success starts with writing one single blog
            post, but don't stop there. Keep jumping over the pitfalls and
            swinging your way to the top with each step building your success
            story. Develop a plan and stick with it, create more content, engage
            in conversations, promote yourself and your work, build
            relationships with peers and influencers, reinforce your value.
            Track your progress closely and focus on the areas where you can
            improve, identify opportunities to grow your audience and add more
            value, refine and optimize your strategy, and always seek to achieve
            the next level of success. Your journey to the top is a never-ending
            one but that's also what makes it so exciting.
          </p>
        </div> */}
            <div className='singleblogpage_first_right'>
              <img
                src={`${process.env.React_App_Base_Image_Url}${responseSingleBlog?.data?.blog?.blogImage}`}
                alt='banner'
              />
            </div>
          </div>
          <div className='singleblogpage_second'>
            <p style={{ fontSize: "22px" }}>
              {responseSingleBlog?.data?.blog?.blogShortDescription}
            </p>
            <p>{parse(responseSingleBlog?.data?.blog?.blogDescription)}</p>
            {/* <p>
              Platforming your way to success starts with writing one single
              blog post, but don't stop there. Keep jumping over the pitfalls
              and swinging your way to the top with your writing skills, and put
              yourself and your brand on the map. As you progress, keep building
              up your portfolio one blog post at a time. Have fun, get creative,
              and unleash your potential! You'll be Mario-esque in your quest to
              tackle the obstacles ahead. Show the world what you are made of
              and don't stop until you reach the top, and beyond!
            </p>
            <p>
              Platforming your way to success starts with writing one single
              blog post, but don't stop there. Keep jumping over the pitfalls
              and swinging your way to the top with each step building your
              success story. Develop a plan and stick with it, create more
              content, engage in conversations, promote yourself and your work,
              build relationships with peers and influencers, reinforce your
              value. Track your progress closely and focus on the areas where
              you can improve, identify opportunities to grow your audience and
              add more value, refine and optimize your strategy, and always seek
              to achieve the next level of success. Your journey to the top is a
              never-ending one but that's also what makes it so exciting.
            </p>
            <p>
              Platforming your way to success starts with writing one single
              blog post, but don't stop there. Keep pushing on and don't lose
              hope; use each success as fuel for the next challenge. Swing, hop,
              and climb your way to the next level with each leap bringing you
              closer to where you want to be. Writing blog posts is the starting
              point, but only you can determine how high you go. Put in the
              work, be honest with yourself, and never be satisfied with
              mediocrity. Forge your own path and take control of your success
              narrative.
            </p>

            <p>
              Platforming your way to success starts with writing one single
              blog post, but don't stop there. Keep jumping over the pitfalls
              and swinging your way to the top with your writing skills, and put
              yourself and your brand on the map. As you progress, keep building
              up your portfolio one blog post at a time. Have fun, get creative,
              and unleash your potential! You'll be Mario-esque in your quest to
              tackle the obstacles ahead. Show the world what you are made of
              and don't stop until you reach the top, and beyond!
            </p> */}
          </div>
          <NewsLetter />
          <Footer />
        </div>
      )}
    </>
  );
}

export default SingleBlogPage;

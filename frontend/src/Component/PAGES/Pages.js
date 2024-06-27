import React from "react";
// import "./DiwaliBrussels.css";
import "./Pages.css";
import { Link } from "react-router-dom";
// import img from "../imges/Rectangle 118.png";
// import DiwaliBrusselCard from "../Layout/DiwaliBrusselCard/DiwaliBrusselCard";
// import img2 from "../imges/Rectangle 105.png";
// import img3 from "../imges/Rectangle 119.png";
// import img4 from "../imges/Rectangle 120.png";
// import img5 from "../imges/Rectangle 121.png";
// import img6 from "../imges/Rectangle 122.png";
// import img7 from "../imges/Rectangle 104.png";
// import img8 from "../imges/Rectangle 103.png";
// import img9 from "../imges/Rectangle 102.png";
// import video from "../imges/video/video.mp4";
import HeadImage from "../Layout/HeadImage/HeadImage";
import Blogcard from "../BlogCard/Blogcard";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import {
  Backdrop,
  Box,
  Fade,
  Modal,
  // Typography
} from "@mui/material";
import ReactPlayer from "react-player";
import NavBar from "../Layout/NavBar/NavBar";

import ShowBooking from "../ShowBooking/ShowBooking";

import { useRef } from "react";

import {
  // useCreatePageMutation,
  useGetPagesQuery,
  // useGetOnePageByIdQuery,
  // useUpdatePageByIdMutation,
  // useUpdatePagePublishByIdMutation,
} from "../../services/pages";

import { useNavigate } from "react-router-dom";

import parse from "html-react-parser";

import { useParams } from "react-router-dom";

function Pages() {
  const history = useNavigate();
  const responseGetPages = useGetPagesQuery();

  const bookRef = useRef();

  const { pageId } = useParams();
  //   console.log(pageId);

  const pageData = responseGetPages?.data?.find((data) => {
    return data.PagesLink === pageId;
  });

  //   console.log(pageData);

  //   console.log(responseGetPages);

  const style = {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width:600,
    height: 500,

    bgcolor: "transparent",
    border: "2px solid transparent",
    outline: "0",
    // boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <NavBar />
      {!responseGetPages.isLoading && (
        <div className='diwalibrussels'>
          <div className='breadcreams'>
            <Link to='/' className='breadcreams_home'>
              <p>Home</p>{" "}
            </Link>{" "}
            /<p>{pageData?.PagesTitle}</p>
          </div>
          {/* <div className='diwalibrussels_banner'>
            <video
              src={`${process.env.React_App_Base_Image_Url}${responseGetPages?.data[0]?.PagesBannerVideo}`}
              muted
              autoPlay
              loop
              style={{ width: "100%", paddingTop: "1rem" }}
            />

            <h3>{responseGetPages?.data[0]?.PagesTitle}</h3>
            <Link to='/booknow'> Book Now</Link>
          </div> */}
          <div
            className='homebanner'
            // style={{
            //   background: `url(${process.env.React_App_Base_Image_Url}${responseGetHeroSection?.data[0]?.heroSectionBannerVideo})`,
            // }}
          >
            <video
              src={`${process.env.React_App_Base_Image_Url}${pageData?.PagesBannerVideo}`}
              muted
              autoPlay
              loop
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className='homebannerSubDiv' style={{ position: "absolute" }}>
              <p className='homebanner_para'>{pageData?.PagesTitle}</p>

              <button
                onClick={() =>
                  bookRef.current?.scrollIntoView({ behavior: "smooth" })
                }>
                Book Now
              </button>
            </div>
          </div>
          <div className='diwalibrussels_content'>
            <div className='diwalibrussels_content_left'>
              <p>
                {parse(
                  pageData?.PagesDescription ? pageData?.PagesDescription : ""
                )}
              </p>
              {/* <p>
                Nor forgive their sinful oppresion of us; We shall always
                remember their acts of wickedness, Their enmity and disdain for
                all mankind; With courage and fortitude we shall not shirk from
                our duty, To expel them and their evils from this world; Our
                feud shall continue until the day The adversary is vanquished
                and the truth wins out.
              </p> */}
              <button
                bgcolor='#E68639'
                color='#fff'
                className='button'
                onClick={handleOpen}
                style={{ cursor: "pointer" }}>
                Watch Now
              </button>
            </div>
            <div className='diwalibrussels_content_right'>
              <img
                src={pageData?.PagesImg?.map((data) => {
                  return `${process.env.React_App_Base_Image_Url}${data}`;
                })}
                alt='banner'
              />
            </div>
          </div>
          <div className='diwalibrussels_heading'>
            <p>Events</p>
          </div>
          <div className="diwalibrussels_heading-showbooking"
            ref={bookRef}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: 'center',
              width: "80%",
            }}>
            <ShowBooking />
          </div>
          {/* <div className='diwalibrussels_card'>
            <DiwaliBrusselCard image={img7} />
            <DiwaliBrusselCard image={img8} />
            <DiwaliBrusselCard image={img9} />
          </div> */}
          <div className='diwalibrussels_heading'>
            <p>Gallery</p>
          </div>
          <div className='diwalibrussels_images'>
            <div className='diwalibrussels_images_row1'>
              {pageData?.PagesGallary?.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={`${process.env.React_App_Base_Image_Url}${image}`}
                    alt='galleryImage'
                  />
                );
              })}
              {/* <img src={img2} alt='banner' />
              <img src={img3} alt='banner' />
              <img src={img4} alt='banner' /> */}
            </div>
            {/* <div className='diwalibrussels_images_row2'>
              <img src={img5} alt='banner' />
              <img src={img6} alt='banner' />
              <img src={img5} alt='banner' />
              <img src={img6} alt='banner' />
            </div> */}
          </div>
          <div className='diwalibrussels_heading'>
            <p>Video</p>
          </div>
          {/* <div className='diwalibrussels_video'></div> */}
          <video
            src={`${process.env.React_App_Base_Image_Url}${pageData?.PagesVideo}`}
            muted
            autoPlay
            loop
            style={{
              width: "100%",
              paddingTop: "1rem",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className='diwalibrussels_know_more'>
            <HeadImage />
            <h3>Know More</h3>
            <div className='diwalibrussels_know_more_card'>
              <Blogcard />
              {/* <Blogcard />
              <Blogcard /> */}
            </div>
          </div>
          <NewsLetter />
          <Footer />
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}>
            <Fade in={open}>
              <Box sx={style}>
                <ReactPlayer
                  url={`${process.env.React_App_Base_Image_Url}${pageData?.PagesVideo}`}
                  playing={true}
                  width={"100%"}
                  height={"100%"}
                  controls={true}
                  className='video_player'
                />
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}

export default Pages;

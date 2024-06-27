import React from "react";
import "./DiwaliBrussels.css";
import { Link } from "react-router-dom";
// import img from "../imges/Rectangle 118.png";
import DiwaliBrusselCard from "../Layout/DiwaliBrusselCard/DiwaliBrusselCard";
// import img2 from "../imges/Rectangle 105.png";
// import img3 from "../imges/Rectangle 119.png";
// import img4 from "../imges/Rectangle 120.png";
// import img5 from "../imges/Rectangle 121.png";
// import img6 from "../imges/Rectangle 122.png";
import img7 from "../imges/Rectangle 104.png";
import img8 from "../imges/Rectangle 103.png";
import img9 from "../imges/Rectangle 102.png";
import video from "../imges/video/video.mp4";
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

import {
  // useCreatePageMutation,
  useGetPagesQuery,
  // useGetOnePageByIdQuery,
  // useUpdatePageByIdMutation,
  // useUpdatePagePublishByIdMutation,
} from "../../services/pages";

import { useNavigate } from "react-router-dom";

import parse from "html-react-parser";

function DiwaliBrussels() {
  const history = useNavigate();
  const responseGetPages = useGetPagesQuery();

  console.log(responseGetPages);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width:600,

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
            /<p>{responseGetPages?.data[2]?.PagesTitle}</p>
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
              src={`${process.env.React_App_Base_Image_Url}${responseGetPages?.data[2]?.PagesBannerVideo}`}
              muted
              autoPlay
              loop
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className='homebannerSubDiv' style={{ position: "absolute" }}>
              <p className='homebanner_para'>
                {responseGetPages?.data[2]?.PagesTitle}
              </p>

              <button onClick={() => history("/booknow")}>Book Now</button>
            </div>
          </div>
          <div className='diwalibrussels_content'>
            <div className='diwalibrussels_content_left'>
              <p>{parse(responseGetPages?.data[2]?.PagesDescription)}</p>
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
                src={responseGetPages?.data[2]?.PagesImg?.map((data) => {
                  return `${process.env.React_App_Base_Image_Url}${data}`;
                })}
                alt='banner'
              />
            </div>
          </div>
          <div className='diwalibrussels_heading'>
            <p>Events</p>
          </div>
          <div className='diwalibrussels_card'>
            <DiwaliBrusselCard image={img7} />
            <DiwaliBrusselCard image={img8} />
            <DiwaliBrusselCard image={img9} />
          </div>
          <div className='diwalibrussels_heading'>
            <p>Gallery</p>
          </div>
          <div className='diwalibrussels_images'>
            <div className='diwalibrussels_images_row1'>
              {responseGetPages?.data[2]?.PagesGallary?.map((image, index) => {
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
            src={`${process.env.React_App_Base_Image_Url}${responseGetPages?.data[2]?.PagesVideo}`}
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
                  url={video}
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

export default DiwaliBrussels;

// import React from "react";
// import { Link } from "react-router-dom";
// import img from "../imges/Rectangle 118.png";
// import DiwaliBrusselCard from "../Layout/DiwaliBrusselCard/DiwaliBrusselCard";
// import img2 from "../imges/Rectangle 105.png";
// import img3 from "../imges/Rectangle 119.png";
// import img4 from "../imges/Rectangle 120.png";
// import img5 from "../imges/Rectangle 121.png";
// import img6 from "../imges/Rectangle 122.png";
// import img7 from '../imges/Rectangle 104.png'
// import img8 from '../imges/Rectangle 103.png'
// import img9 from '../imges/Rectangle 102.png'
// import HeadImage from "../Layout/HeadImage/HeadImage";
// import Blogcard from "../BlogCard/Blogcard";
// import NewsLetter from "../Layout/NewsLetter/NewsLetter";
// import Footer from "../Footer/Footer";
// import './Rama.css'
// import { Backdrop, Box, Fade, Modal } from "@mui/material";
// import ReactPlayer from "react-player";
// import video from '../imges/video/video.mp4'
// import NavBar from "../Layout/NavBar/NavBar";
// function Rama() {
//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",

//     bgcolor: "transparent",
//     border: "2px solid transparent",
//     outline: "0",
//     // boxShadow: 24,
//     p: 4,
//   };

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   return (
//     <>
//         <NavBar />
//         <div className="diwalibrussels">
//             <div className="breadcreams">
//         <Link to='/' className="breadcreams_home">
//           <p >Home</p>{" "}
//         </Link>{" "}
//         /<p>Rama</p>
//       </div>
//       <div className="rama_banner">
//         <h3>Rama</h3>
//         <Link to="#"> Book Now</Link>
//       </div>
//       <div className="diwalibrussels_content">
//         <div className="diwalibrussels_content_left">
//           <p>
//             We heap scorn upon our nemesis, Our foe, our sworn enemy; We must
//             stand strong and brave, Rallying to fight we stand tall and free;
//             For we know what they are capable of, The atrocities they have done;
//             We will never forget their injustices And their merciless conquests,
//             their heinous crimes and ploys; We shall never suffer their
//             unwelcome invasions.
//           </p>
//           <p>
//             Nor forgive their sinful oppresion of us; We shall always remember
//             their acts of wickedness, Their enmity and disdain for all mankind;
//             With courage and fortitude we shall not shirk from our duty, To
//             expel them and their evils from this world; Our feud shall continue
//             until the day The adversary is vanquished and the truth wins out.
//           </p>
//           <button bgcolor="#E68639" color="#fff" className="button" onClick={handleOpen}>
//             Watch Now
//           </button>
//         </div>
//         <div className="diwalibrussels_content_right">
//           <img src={img} alt="banner" />
//         </div>
//       </div>
//       <div className="diwalibrussels_heading">
//         <p>Events</p>
//       </div>
//       <div className="diwalibrussels_card">
//         <DiwaliBrusselCard image={img8}/>
//         <DiwaliBrusselCard image={img9}/>
//         <DiwaliBrusselCard image={img7}/>
//       </div>
//       <div className="diwalibrussels_heading">
//         <p>Gallery</p>
//       </div>
//       <div className="diwalibrussels_images">
//         <div className="diwalibrussels_images_row1">
//           <img src={img2} alt="banner" />
//           <img src={img3} alt="banner" />
//           <img src={img4} alt="banner" />
//         </div>
//         <div className="diwalibrussels_images_row2">
//           <img src={img5} alt="banner" />
//           <img src={img6} alt="banner" />
//         </div>
//       </div>
//       <div className="diwalibrussels_heading">
//         <p>Video</p>
//       </div>
//       <div className="diwalibrussels_video"></div>
//       <div className="diwalibrussels_know_more">
//         <HeadImage />
//         <h3>Know More</h3>
//         <div className="diwalibrussels_know_more_card">
//           <Blogcard />
//           <Blogcard />
//           <Blogcard />
//         </div>
//       </div>
//       <NewsLetter/>
//       <Footer/>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//           <ReactPlayer url={video} playing={true} width={"100%"} height={'100%'} controls={true} className='video_player'/>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//     </>

//   );
// }

// export default Rama;

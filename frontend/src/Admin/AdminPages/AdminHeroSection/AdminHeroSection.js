import React, { useEffect } from "react";
import "./AdminHeroSection.css";
import { forwardRef } from "react";
import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, Search } from "@mui/icons-material";
import { useState } from "react";
import img from "../../AdminAsset/Images/Rectangle 110798.png";

import {
  useGetHeroSectionQuery,
  useCreateHeroSectionMutation,
  useUpdateHeroSectionByIdMutation,
  // useDeleteHeroSectionByIdMutation,
  // useGetOneHeroSectionByIdQuery,
} from "../../../services/heroSection";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction='up' ref={ref} {...props} />;
// });

function AdminHeroSection() {
  const responseGetHeroSection = useGetHeroSectionQuery();

  const [createHeroSection, responseCreateHeroSection] =
    useCreateHeroSectionMutation();

  const [updateHeroSectionById, responseUpdateHeroSectionById] =
    useUpdateHeroSectionByIdMutation();

  // const [deleteHeroSectionById, responseDeleteHeroSectionById] =
  //   useDeleteHeroSectionByIdMutation();

  useEffect(() => {
    responseGetHeroSection.refetch();
  }, [
    responseCreateHeroSection.isSuccess,
    responseUpdateHeroSectionById.isSuccess,
  ]);

  const [heroSectionBannerId, setHeroSectionBannerId] = useState();

  const [heroSectionBannnerTitle, setHeroSectionBannnerTitle] = useState();
  const [heroSectionBannerSubTitle, setHeroSectionBannerSubTitle] = useState();
  const [heroSectionBannerLink, setHeroSectionBannerLink] = useState();
  const [heroSectionBannerVideo, setHeroSectionBannerVideo] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  // const [open2, setOpen2] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen2(true);
  // };

  // const handleClose2 = () => {
  //   setOpen2(false);
  // };

  const handleAddBanner = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("heroSectionBannnerTitle", heroSectionBannnerTitle);
    formData.append("heroSectionBannerSubTitle", heroSectionBannerSubTitle);
    formData.append("heroSectionBannerLink", heroSectionBannerLink);
    formData.append("heroSectionBannerVideo", heroSectionBannerVideo);
    createHeroSection(formData);
    handleClose();
  };

  const handleUpdateBanner = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("heroSectionBannnerTitle", heroSectionBannnerTitle);
    formData.append("heroSectionBannerSubTitle", heroSectionBannerSubTitle);
    formData.append("heroSectionBannerLink", heroSectionBannerLink);
    formData.append("heroSectionBannerVideo", heroSectionBannerVideo);

    const submitData = {
      id: heroSectionBannerId,
      updateData: formData,
    };

    updateHeroSectionById(submitData);
    handleClose1();
  };

  // const handleDelete = () => {
  //   deleteHeroSectionById(heroSectionBannerId);
  //   handleClose2();
  // };

  const renderedHeroSection = responseGetHeroSection?.data?.map(
    (response, index) => {
      return (
        <tr
          key={index}
          onClick={() => {
            setHeroSectionBannerId(response._id);
            setHeroSectionBannnerTitle(response.heroSectionBannnerTitle);
            setHeroSectionBannerSubTitle(response.heroSectionBannerSubTitle);
            setHeroSectionBannerLink(response.heroSectionBannerLink);
          }}>
          <td>{index + 1}</td>
          <td style={{ width: "250px" }}>
            <video
              src={`${process.env.React_App_Base_Image_Url}${response.heroSectionBannerVideo}`}
              // alt='banner'
              style={{ width: "250px", height: "150px" }}
              controls
            />{" "}
          </td>
          <td>{response.heroSectionBannnerTitle}</td>
          <td>{response.heroSectionBannerSubTitle}</td>

          <td>
            <Edit
              style={{
                color: "#6E798C",
                marginLeft: "5px",
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={handleOpen1}
            />
            {/* <Delete
              style={{
                color: "#6E798C",
                marginLeft: "5px",
                marginRight: "5px",
                cursor: "pointer",
              }}
              onClick={handleClickOpen}
            /> */}
          </td>
        </tr>
      );
    }
  );

  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <p>Home Banner</p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          {/* <span>
            <p>#ID</p>
            <input type='text' placeholder='Search by Id' />
            <Search />
          </span> */}
          {responseGetHeroSection?.data?.length < 1 && (
            <button className='addbutton' onClick={handleOpen}>
              Add Banner
            </button>
          )}
        </div>
        <div className='adminorderpage_table_table'>
          <table>
            <thead>
              <tr>
                <th>S/N</th>

                <th style={{ width: "250px" }}>Video</th>
                <th>Title</th>
                <th>Sub Title</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>
                  <img
                    src={img}
                    alt='banner'
                    style={{ width: "150px", height: "           80px" }}
                  />{" "}
                </td>
                <td>Nemesis</td>
                <td>Nemesis</td>

                <td>
                  <Edit
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen1}
                  />
                  <Delete
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleClickOpen}
                  />
                </td>
              </tr> */}
              {renderedHeroSection}
            </tbody>
          </table>
        </div>
      </div>
      <div className='adminorderpage_pagination'></div>
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
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Add New Banner
            </Typography>
            <form className='modal_form' onSubmit={handleAddBanner}>
              <span>
                <input
                  type='text'
                  placeholder='Title'
                  required
                  onChange={(e) => setHeroSectionBannnerTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Sub Title'
                  required
                  onChange={(e) => setHeroSectionBannerSubTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Link'
                  required
                  onChange={(e) => setHeroSectionBannerLink(e.target.value)}
                />
              </span>
              <p className='modal_form_para'>Banner Video</p>

              <input
                type='file'
                accept='video/*'
                required
                onChange={(e) => setHeroSectionBannerVideo(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Add Banner</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open1}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Update Banner
            </Typography>
            <form className='modal_form' onSubmit={handleUpdateBanner}>
              <span>
                <input
                  type='text'
                  placeholder='Title'
                  // required
                  value={heroSectionBannnerTitle}
                  onChange={(e) => setHeroSectionBannnerTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Sub Title'
                  // required
                  value={heroSectionBannerSubTitle}
                  onChange={(e) => setHeroSectionBannerSubTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Link'
                  // required
                  value={heroSectionBannerLink}
                  onChange={(e) => setHeroSectionBannerLink(e.target.value)}
                />
              </span>
              <p className='modal_form_para'>Banner Video</p>

              <input
                type='file'
                accept='video/*'
                required
                onChange={(e) => setHeroSectionBannerVideo(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Update Banner</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      {/* <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle>{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleDelete}>Agree</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
}

export default AdminHeroSection;

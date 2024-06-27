import React, { useEffect } from "react";
import "./AdminHomeCommunity.css";
// import img from "../../AdminAsset/Images/Rectangle 110798.png";
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

import {
  useGetCommunityQuery,
  useCreateCommunityMutation,
  // useGetOneCommunityByIdQuery,
  useDeleteCommunityByIdMutation,
  useUpdateCommunityByIdMutation,
} from "../../../services/community";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function AdminHomeCommunity() {
  const responseGetCommunities = useGetCommunityQuery();
  const [createCommunity, responseCreateCommunity] =
    useCreateCommunityMutation();
  const [updateCommunityById, responseUpdateCommunityById] =
    useUpdateCommunityByIdMutation();
  const [deleteCommunityById, responseDeleteCommunityById] =
    useDeleteCommunityByIdMutation();

  useEffect(() => {
    responseGetCommunities.refetch();
  }, [
    responseCreateCommunity.isSuccess,
    responseUpdateCommunityById.isSuccess,
    responseDeleteCommunityById.isSuccess,
  ]);

  const [communityTitle, setCommunityTitle] = useState();
  const [communitySubTitle, setCommunitySubTitle] = useState();
  const [communityImage, setCommunityImage] = useState();
  const [communityId, setCommunityId] = useState();

  // console.log(responseGetCommunities);
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
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleAddCommunity = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("communityTitle", communityTitle);
    formData.append("communitySubTitle", communitySubTitle);
    formData.append("communityImage", communityImage);

    createCommunity(formData);
    handleClose();
  };

  const handleUpdateCommunity = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("communityTitle", communityTitle);
    formData.append("communitySubTitle", communitySubTitle);
    formData.append("communityImage", communityImage);
    // console.log("Community Updated");

    const submitData = {
      id: communityId,
      updateData: formData,
    };

    updateCommunityById(submitData);
    handleClose1();
  };

  const handleDeleteCommunity = () => {
    deleteCommunityById(communityId);
    handleClose2();
  };

  const [search, setSearch] = useState("");

  const filteredData = responseGetCommunities?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.communityTitle.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedCommunities = filteredData.map((response, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setCommunityId(response._id);
          setCommunityTitle(response.communityTitle);
          setCommunitySubTitle(response.communitySubTitle);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>
          <img
            src={`${process.env.React_App_Base_Image_Url}${response.communityImage}`}
            alt='banner'
            style={{ width: "150px", height: "80px" }}
          />{" "}
        </td>
        <td>{response.communityTitle}</td>

        <td>{response.communitySubTitle}</td>
        {/* <td>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </td> */}
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
      </tr>
    );
  });
  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <p>Community</p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          <span>
            {/* <p>#ID</p> */}
            <input
              type='text'
              placeholder='Search by Title'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </span>
          <button className='addbutton' onClick={handleOpen}>
            Add Community
          </button>
        </div>
        <div className='adminorderpage_table_table'>
          {filteredData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>S/N</th>

                  <th style={{ width: "250px" }}>Image</th>
                  <th>Title</th>
                  <th>Sub Title</th>
                  {/* <th>Published</th> */}

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
                    style={{ width: "150px", height: "80px" }}
                  />{" "}
                </td>
                <td>Nemesis</td>

                <td>Nemesis</td>
                <td>
                  <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round'></span>
                  </label>
                </td>
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
                {renderedCommunities.reverse()}
              </tbody>
            </table>
          ) : (
            <p style={{ fontSize: "30px" }}>No Data Found</p>
          )}
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
              Community Info
            </Typography>
            <form className='modal_form' onSubmit={handleAddCommunity}>
              <span>
                <input
                  type='text'
                  placeholder='Title'
                  required
                  onChange={(e) => setCommunityTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Sub Title'
                  required
                  onChange={(e) => setCommunitySubTitle(e.target.value)}
                />
              </span>

              <p className='modal_form_para'>Banner Image</p>

              <input
                type='file'
                accept='image/png, image/jpeg'
                required
                onChange={(e) => setCommunityImage(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Add Community</button>
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
              Community Info
            </Typography>
            <form className='modal_form' onSubmit={handleUpdateCommunity}>
              <span>
                <input
                  type='text'
                  placeholder='Title'
                  value={communityTitle}
                  onChange={(e) => setCommunityTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Sub Title'
                  value={communitySubTitle}
                  onChange={(e) => setCommunitySubTitle(e.target.value)}
                />
              </span>

              <p className='modal_form_para'>Banner Image</p>

              <input
                type='file'
                accept='image/png, image/jpeg'
                required
                onChange={(e) => setCommunityImage(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Add Community</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Dialog
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
          <Button onClick={handleDeleteCommunity}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminHomeCommunity;

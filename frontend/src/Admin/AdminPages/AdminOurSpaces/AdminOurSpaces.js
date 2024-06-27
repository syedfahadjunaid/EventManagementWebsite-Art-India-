import React, { forwardRef, useEffect, useState } from "react";
import "./AdminOurSpaces.css";
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
// import img from "../../AdminAsset/Images/Rectangle 110798.png";

import {
  useGetSpacesQuery,
  useCreateSpaceMutation,
  // useGetOneSpaceByIdQuery,
  useDeleteSpaceByIdMutation,
  useUpdateSpaceByIdMutation,
} from "../../../services/spaces";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function AdminOurSpaces() {
  const responseOurSpace = useGetSpacesQuery();

  const [createSpace, responseCreateSpace] = useCreateSpaceMutation();
  const [updateSpaceById, responseUpdateSpaceById] =
    useUpdateSpaceByIdMutation();
  const [deleteSpaceById, responseDeleteSpaceById] =
    useDeleteSpaceByIdMutation();

  useEffect(() => {
    responseOurSpace.refetch();
  }, [
    responseCreateSpace.isSuccess,
    responseUpdateSpaceById.isSuccess,
    responseDeleteSpaceById.isSuccess,
  ]);

  const [ourSpacesTitle, setOurSpacesTitle] = useState();
  const [ourSpacesSubTitle, setOurSpacesSubTitle] = useState();
  const [ourSpacesDescription, setOurSpacesDescription] = useState();
  const [ourSpacesHighlights, setOurSpacesHighlights] = useState();
  const [ourSpacesImage, setOurSpacesImage] = useState();

  const [ourSpaceId, setOurSpaceId] = useState();

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
    height: "550px",
    overflowY: "scroll",
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

  const [search, setSearch] = useState("");

  const filteredData = responseOurSpace?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.ourSpacesTitle.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedSpaces = filteredData.map((response, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setOurSpaceId(response._id);
          setOurSpacesTitle(response.ourSpacesTitle);
          setOurSpacesSubTitle(response.ourSpacesSubTitle);
          setOurSpacesDescription(response.ourSpacesDescription);
          setOurSpacesHighlights(response.ourSpacesHighlights);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>
          <img
            src={`${process.env.React_App_Base_Image_Url}${response.ourSpacesImage}`}
            alt='banner'
            style={{ width: "150px", height: "80px" }}
          />{" "}
        </td>
        <td>{response.ourSpacesTitle}</td>

        <td>{response.ourSpacesSubTitle}</td>
        {/* <td>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
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

  const handleAddSpace = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ourSpacesTitle", ourSpacesTitle);
    formData.append("ourSpacesSubTitle", ourSpacesSubTitle);
    formData.append("ourSpacesDescription", ourSpacesDescription);
    formData.append("ourSpacesHighlights", ourSpacesHighlights);
    formData.append("ourSpacesImage", ourSpacesImage);

    createSpace(formData);
    handleClose();
  };

  const handleUpdateSpace = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("ourSpacesTitle", ourSpacesTitle);
    formData.append("ourSpacesSubTitle", ourSpacesSubTitle);
    formData.append("ourSpacesDescription", ourSpacesDescription);
    formData.append("ourSpacesHighlights", ourSpacesHighlights);
    formData.append("ourSpacesImage", ourSpacesImage);

    const submitData = {
      id: ourSpaceId,
      updateData: formData,
    };

    updateSpaceById(submitData);
    handleClose1();
  };

  const handleDeleteSpace = () => {
    deleteSpaceById(ourSpaceId);
    handleClose2();
  };
  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <p>Our Spaces</p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          <span>
            {/* <p>#ID</p> */}
            <input
              type='text'
              placeholder='Search by title'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </span>
          <button className='addbutton' onClick={handleOpen}>
            Add Spaces
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
              <tbody>{renderedSpaces.reverse()}</tbody>
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
              Spaces info
            </Typography>
            <form className='modal_form' onSubmit={handleAddSpace}>
              <span>
                <input
                  type='text'
                  placeholder='Title'
                  required
                  onChange={(e) => setOurSpacesTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Sub Title'
                  required
                  onChange={(e) => setOurSpacesSubTitle(e.target.value)}
                />
              </span>

              <p className='modal_form_para'>Description</p>
              <span>
                <textarea
                  rows={8}
                  placeholder='Description'
                  required
                  onChange={(e) => setOurSpacesDescription(e.target.value)}
                />
              </span>
              <p className='modal_form_para'>Image</p>

              <input
                type='file'
                accept='image/png, image/jpeg'
                required
                onChange={(e) => setOurSpacesImage(e.target.files[0])}
              />
              <p className='modal_form_para'>Highlights</p>
              <span>
                <textarea
                  rows={8}
                  placeholder='Highlights'
                  required
                  onChange={(e) => setOurSpacesHighlights(e.target.value)}
                />
              </span>

              <button className='modal_form_buttom'>Add Spaces</button>
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
              Spaces info
            </Typography>
            <form className='modal_form' onSubmit={handleUpdateSpace}>
              <span>
                <input
                  type='text'
                  placeholder='Title'
                  value={ourSpacesTitle}
                  onChange={(e) => setOurSpacesTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  placeholder='Sub Title'
                  value={ourSpacesSubTitle}
                  onChange={(e) => setOurSpacesSubTitle(e.target.value)}
                />
              </span>

              <p className='modal_form_para'>Description</p>
              <span>
                <textarea
                  rows={8}
                  placeholder='Description'
                  value={ourSpacesDescription}
                  onChange={(e) => setOurSpacesDescription(e.target.value)}
                />
              </span>
              <p className='modal_form_para'>Image</p>

              <input
                type='file'
                accept='image/png, image/jpeg'
                required
                onChange={(e) => setOurSpacesImage(e.target.files[0])}
              />
              <p className='modal_form_para'>Highlights</p>
              <span>
                <textarea
                  rows={8}
                  placeholder='Highlights'
                  value={ourSpacesHighlights}
                  onChange={(e) => setOurSpacesHighlights(e.target.value)}
                />
              </span>

              <button className='modal_form_buttom'>Update Spaces</button>
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
          <Button onClick={handleDeleteSpace}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminOurSpaces;

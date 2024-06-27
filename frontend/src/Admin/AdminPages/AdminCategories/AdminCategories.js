import React, { useEffect } from "react";
import "./AdminCategories.css";
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
import { Delete, Edit, List, Search } from "@mui/icons-material";
import { useState } from "react";
// import img from "../../AdminAsset/Images/Rectangle 110798.png";

import {
  useCreateCategoryMutation,
  useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
  // useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
  // usePublishCategoriesByIdMutation,
} from "../../../services/categories";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function AdminCategories() {
  const responseCategories = useGetCategoriesQuery();

  const [createCategory, responseCreateCategory] = useCreateCategoryMutation();
  const [deleteCategoryById, responseDeleteCategoryById] =
    useDeleteCategoryByIdMutation();
  const [updateCategoryById, responseUpdateCategoryById] =
    useUpdateCategoryByIdMutation();

  useEffect(() => {
    responseCategories.refetch();
  }, [
    responseCreateCategory.isSuccess,
    responseDeleteCategoryById.isSuccess,
    responseUpdateCategoryById.isSuccess,
  ]);
  // const [publishCategoriesById] = usePublishCategoriesByIdMutation();

  const [CategoriesTitle, setCategoriesTitle] = useState();
  // const [SubCategoriesName, setSubCategoriesName] = useState();
  const [CategoriesImage, setCategoriesImage] = useState();
  // const [Published, setPublished] = useState();

  const [categoryId, setCategoryId] = useState();

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

  const handleAddCategory = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("CategorieTitle", CategoriesTitle);
    formData.append("SubCategorieTitle", "NOT IN USE");
    formData.append("CategoriesImage", CategoriesImage);

    createCategory(formData);
    handleClose();
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("CategorieTitle", CategoriesTitle);
    formData.append("SubCategorieTitle", "NOT IN USE");
    formData.append("CategoriesImage", CategoriesImage);

    const submitData = {
      id: categoryId,
      updateData: formData,
    };

    updateCategoryById(submitData);
    handleClose1();
  };

  const handleDeleteCategory = () => {
    deleteCategoryById(categoryId);
    handleClose2();
  };

  // const handlePublish = (e) => {
  //   const value = e.target.checked;
  //   // console.log(value);

  //   // const formData = new FormData();

  //   // formData.append("published", value);

  //   const formData = {
  //     published: value,
  //   };

  //   const submitData = {
  //     id: categoryId,
  //     updateData: formData,
  //   };

  //   publishCategoriesById(submitData);
  // };

  const [search, setSearch] = useState("");

  const filteredData = responseCategories?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.CategoriesTitle.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedCategories = filteredData.map((response, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setCategoriesTitle(response.CategoriesTitle);
          setCategoryId(response._id);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>
          <img
            src={`${process.env.React_App_Base_Image_Url}${response.CategoriesImage}`}
            alt='brand'
            style={{ width1: "180px", height: "100px" }}
          />
        </td>
        <td>{response.CategoriesTitle}</td>
        {/* <td>
            <label className='switch'>
              <input
                type='checkbox'
                checked={response.Published}
                onChange={handlePublish}
              />
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
        <List className='adminsidebar_icon' style={{ fontSize: "35px" }} />
        <p>All Categories</p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          <span>
            {/* <p>#ID</p> */}
            <input
              type='text'
              placeholder='Search by category name'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </span>
          <button className='addbutton' onClick={handleOpen}>
            Add Category
          </button>
        </div>
        <div className='adminorderpage_table_table'>
          {filteredData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th style={{ width: "250px" }}>Image</th>
                  <th>Event Category Name</th>
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
                    alt='brand'
                    style={{ width1: "100px", height: "50px" }}
                  />
                </td>
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
                {renderedCategories.reverse()}
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
              Category Info
            </Typography>
            <form className='modal_form' onSubmit={handleAddCategory}>
              <span>
                <input
                  type='text'
                  placeholder='Category Name'
                  required
                  onChange={(e) => setCategoriesTitle(e.target.value)}
                />
              </span>
              {/* <span>
                <input type='text' placeholder='Sub category name' />
              </span> */}
              <p className='modal_form_para'>Images</p>

              <input
                type='file'
                required
                accept='image/png, image/jpeg'
                onChange={(e) => setCategoriesImage(e.target.files[0])}
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
              Category Info
            </Typography>
            <form className='modal_form' onSubmit={handleUpdateCategory}>
              <span>
                <input
                  type='text'
                  placeholder='Category Name'
                  value={CategoriesTitle}
                  onChange={(e) => setCategoriesTitle(e.target.value)}
                />
              </span>
              {/* <span>
                <input type='text' placeholder='Sub category name' />
              </span> */}
              <p className='modal_form_para'>Images</p>

              <input
                type='file'
                required
                accept='image/png, image/jpeg'
                onChange={(e) => setCategoriesImage(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Update Banner</button>
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
          <Button onClick={handleDeleteCategory}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminCategories;

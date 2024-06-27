import React, { forwardRef, useState, useEffect } from "react";
import "./AdminBlog.css";
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
  List,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, Search } from "@mui/icons-material";
import JoditEditor from "jodit-react";

import {
  useGetBlogsQuery,
  // useGetBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogByIdMutation,
  useDeleteBlogByIdMutation,
} from "../../../services/blog";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function AdminBlog() {
  const responseGetAllBlogs = useGetBlogsQuery();

  const [createBlog, responseCreateBlog] = useCreateBlogMutation();
  // console.log(responseCreateBlog);
  const [updateBlogById, responseUpdateBlogById] = useUpdateBlogByIdMutation();
  const [deleteBlogById, responseDeleteBlogById] = useDeleteBlogByIdMutation();

  useEffect(() => {
    responseGetAllBlogs.refetch();
  }, [
    responseCreateBlog.isSuccess,
    responseUpdateBlogById.isSuccess,
    responseDeleteBlogById.isSuccess,
  ]);

  const [blogData, setBlogData] = useState(""); //Blog Id

  // Create Blog States
  const [blogTitle, setBlogTitle] = useState();
  const [blogTag, setBlogTag] = useState();
  const [blogShortDescription, setBlogShortDescription] = useState();
  const [blogDescription, setBlogDescription] = useState();
  const [blogImage, setBlogImage] = useState();

  // Update Blog States
  const [updateBlogTitle, setUpdateBlogTitle] = useState("");
  const [updateBlogTag, setUpdateBlogTag] = useState("");
  const [updateBlogShortDescription, setUpdateBlogShortDescription] =
    useState("");
  const [updateBlogDescription, setUpdateBlogDescription] = useState("");
  const [updateBlogImage, setUpdateBlogImage] = useState("");

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

  const handleCreateBlog = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("blogTitle", blogTitle);
    formData.append("blogTag", "NOT IN USE");
    formData.append("blogShortDescription", blogShortDescription);
    formData.append("blogDescription", blogDescription);
    formData.append("blogImage", blogImage);

    createBlog(formData);
    handleClose();
  };

  const handleUpdateBlog = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("blogTitle", updateBlogTitle);
    formData.append("blogTag", "NOT IN USE");
    formData.append("blogShortDescription", updateBlogShortDescription);
    formData.append("blogDescription", updateBlogDescription);
    formData.append("blogImage", updateBlogImage);

    const dataToUpdate = {
      id: blogData._id,
      updateData: formData,
    };

    updateBlogById(dataToUpdate);
    handleClose1();
  };

  const handleDeleteById = () => {
    setOpen2(false);
    deleteBlogById(blogData._id);
  };

  const [search, setSearch] = useState("");

  const filteredData = responseGetAllBlogs?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.blogTitle.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  // console.log(filteredData);

  const renderedTable = filteredData.map((mappedData, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setBlogData(mappedData);
          setUpdateBlogTitle(mappedData.blogTitle);
          setUpdateBlogImage(mappedData.blogImage);
          setUpdateBlogDescription(mappedData.blogDescription);
          setUpdateBlogShortDescription(mappedData.blogShortDescription);
          setUpdateBlogTag(mappedData.blogTag);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>{mappedData.blogTitle}</td>
        <td>
          <img
            className=''
            style={{ width: "80px", height: "80px" }}
            src={`${process.env.React_App_Base_Image_Url}${mappedData.blogImage}`}
            alt=''
          />
        </td>
        {/* <td>{mappedData.blogTag}</td> */}

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
        <List className='adminsidebar_icon' style={{ fontSize: "35px" }} />
        <p>Blog’s</p>
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
            Add Blog
          </button>
        </div>
        <div className='adminorderpage_table_table'>
          {filteredData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>S/N</th>

                  <th>Title</th>
                  <th style={{ width: "250px" }}>IMG</th>
                  {/* <th>Tags</th> */}
                  {/* <th>Published</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Nemesis</td>
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
                {renderedTable.reverse()}
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
              Blog Info
            </Typography>
            <form className='modal_form' onSubmit={handleCreateBlog}>
              <span>
                <input
                  type='text'
                  required
                  placeholder='Blog Title'
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
              </span>
              {/* <span>
                <input
                  type='text'
                  required
                  placeholder='Tag'
                  onChange={(e) => setBlogTag(e.target.value)}
                />
              </span> */}
              <span>
                <input
                  type='text'
                  required
                  placeholder='Short Description'
                  onChange={(e) => setBlogShortDescription(e.target.value)}
                />
              </span>
              <p className='modal_form_para'>Description</p>
              <JoditEditor
                className='editor'
                required
                onChange={(newContent) => setBlogDescription(newContent)}
              />
              <p className='modal_form_para'>Image</p>
              <input
                type='file'
                required
                accept='image/png, image/jpeg'
                onChange={(e) => setBlogImage(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Add Blog</button>
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
            <form className='modal_form' onSubmit={handleUpdateBlog}>
              <span>
                <input
                  type='text'
                  placeholder='Blog Title'
                  required
                  value={updateBlogTitle}
                  onChange={(e) => setUpdateBlogTitle(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  required
                  placeholder='Tag'
                  value={updateBlogTag}
                  onChange={(e) => setUpdateBlogTag(e.target.value)}
                />
              </span>
              <span>
                <input
                  type='text'
                  required
                  placeholder='Short Description'
                  value={updateBlogShortDescription}
                  onChange={(e) =>
                    setUpdateBlogShortDescription(e.target.value)
                  }
                />
              </span>
              <p className='modal_form_para'>Description</p>
              <JoditEditor
                className='editor'
                required
                value={updateBlogDescription}
                onChange={(newContent) => setUpdateBlogDescription(newContent)}
              />
              <p className='modal_form_para'>Image</p>
              <input
                type='file'
                required
                accept='image/png, image/jpeg'
                onChange={(e) => setUpdateBlogImage(e.target.files[0])}
              />
              <button className='modal_form_buttom'>Update Blog</button>
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
        <DialogTitle>{`Delete`}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Are you sure you want to delete this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleDeleteById}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminBlog;

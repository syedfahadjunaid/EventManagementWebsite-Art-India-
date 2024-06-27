import {
  // Delete,
  Edit,
  PostAdd,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  // Button,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogContentText,
  // DialogTitle,
  Fade,
  // MenuItem,
  Modal,
  // Select,
  // Slide,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
// import { forwardRef } from "react";
import "./AdminPages.css";
import JoditEditor from "jodit-react";

import {
  useCreatePageMutation,
  useGetPagesQuery,
  // useGetOnePageByIdQuery,
  useUpdatePageByIdMutation,
  // useUpdatePagePublishByIdMutation,
} from "../../../services/pages";

import {
  // useCreatePrivacyPolicyMutation,
  // useGetOnePrivacyPolicyByIdQuery,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyByIdMutation,
} from "../../../services/privacyPolicy";

import {
  // useCreateTermsAndConditionsMutation,
  // useGetOneTermsAndConditionsByIdQuery,
  useUpdateTermsAndConditionsByIdMutation,
  useGetTermsAndConditionsQuery,
} from "../../../services/termsAndConditions";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction='up' ref={ref} {...props} />;
// });
function AdminPages() {
  const responseGetPages = useGetPagesQuery();

  const responsePrivacyPolicy = useGetPrivacyPolicyQuery();

  const responseTermsAndConditions = useGetTermsAndConditionsQuery();

  // console.log(responseTermsAndConditions);
  const [createPage, responseCreatePage] = useCreatePageMutation();
  const [updatePageById, responseUpdatePageById] = useUpdatePageByIdMutation();

  const [updateTermsAndConditionsById, responseUpdateTermsAndConditionsById] =
    useUpdateTermsAndConditionsByIdMutation();

  // const [createPrivacyPolicy, responseCreatePrivacyPolicy] =
  //   useCreatePageMutation();
  const [updatePrivacyPolicyById, responseUpdatePrivacyPolicyById] =
    useUpdatePrivacyPolicyByIdMutation();

  useEffect(() => {
    responsePrivacyPolicy.refetch();
  }, [responseUpdatePrivacyPolicyById.isSuccess]);

  useEffect(() => {
    responseGetPages.refetch();
  }, [responseCreatePage.isSuccess, responseUpdatePageById.isSuccess]);

  useEffect(() => {
    responseTermsAndConditions.refetch();
  }, [responseUpdateTermsAndConditionsById.isSuccess]);

  const [PagesTitle, setPagesTitle] = useState();
  const [PagesLink, setPagesLink] = useState();
  const [PagesImg, setPagesImg] = useState();
  const [PagesVideo, setPagesVideo] = useState();
  const [PagesGallary, setPagesGallary] = useState([]);
  const [PagesBannerVideo, setPagesBannerVideo] = useState();
  const [PagesDescription, setPagesDescription] = useState();
  const [pageId, setPageId] = useState();

  const [PagesUpdateImg, setPagesUpdateImg] = useState();
  const [PagesUpdateVideo, setPagesUpdateVideo] = useState();
  const [PagesUpdateGallary, setPagesUpdateGallary] = useState([]);
  const [PagesBannerUpdateVideo, setPagesBannerUpdateVideo] = useState();

  const [privacyPolicyHeading, setPrivacyPolicyHeading] = useState();
  const [privacyPolicyDescription, setPrivacyPolicyDescription] = useState();
  const [privacyPolicyHeadingPageId, setPrivacyPolicyHeadingPageId] =
    useState();

  const [termsAndConditionsHeading, setTermsAndConditionsHeading] = useState();
  const [termsAndConditionsDescription, setTermsAndConditionsDescription] =
    useState();
  const [termsAndConditionsId, setTermsAndConditionsId] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    outline: "0",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    height: "550px",
    overflowY: "scroll",
    borderRadius: "5px",
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
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

  const renderedPages = responseGetPages?.data?.map((response, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setPageId(response._id);
          setPagesTitle(response.PagesTitle);
          setPagesLink(response.PagesLink);
          setPagesDescription(response.PagesDescription);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>{response.PagesTitle}</td>
        <td>{response.PagesLink}</td>

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
        </td>
      </tr>
    );
  });

  const imageHandle = (e) => {
    setPagesGallary([...PagesGallary, e.target.files[0]]);
  };

  const imageUpdateHandle = (e) => {
    setPagesUpdateGallary([...PagesUpdateGallary, e.target.files[0]]);
  };

  const handleAddPage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Pagestitle", PagesTitle);
    formData.append("Pagelink", PagesLink);
    formData.append("pageimg", PagesImg);
    formData.append("pagevideo", PagesVideo);
    PagesGallary.forEach((img) => {
      formData.append("gallery", img);
    });
    formData.append("videoimage", PagesBannerVideo);
    formData.append("Pagesdescription", PagesDescription);
    formData.append("Published", true);

    // console.log(formData);

    createPage(formData);

    handleClose();
  };

  const handleUpdatePage = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Pagestitle", PagesTitle);
    formData.append("Pagelink", PagesLink);
    formData.append("pageimg", PagesUpdateImg);
    formData.append("pagevideo", PagesUpdateVideo);
    PagesUpdateGallary.forEach((img) => {
      formData.append("gallery", img);
    });
    formData.append("videoimage", PagesBannerUpdateVideo);
    formData.append("Pagesdescription", PagesDescription);
    formData.append("Published", true);

    // console.log(formData);

    const submitData = {
      id: pageId,
      updateData: formData,
    };

    updatePageById(submitData);

    handleClose1();
  };

  const handleUpdatePrivacyPolicyPage = (e) => {
    e.preventDefault();

    // const formData = new FormData();

    // formData.append("privacyPolicyHeading", privacyPolicyHeading);
    // formData.append("privacyPolicyDescription", privacyPolicyDescription);

    const data = {
      PrivacyPolicyHeading: privacyPolicyHeading,
      PrivacyPolicyDescription: privacyPolicyDescription,
    };
    const submitData = {
      id: privacyPolicyHeadingPageId,
      updateData: data,
    };

    // console.log(submitData);
    updatePrivacyPolicyById(submitData);
    handleClose3();
  };

  const handleUpdateTermsAndConditionsPage = (e) => {
    e.preventDefault();

    const data = {
      TermsAndConditionsHeading: termsAndConditionsHeading,
      TermsAndConditionsDescription: termsAndConditionsDescription,
    };

    const submitData = {
      id: termsAndConditionsId,
      updateData: data,
    };
    console.log(submitData);
    updateTermsAndConditionsById(submitData);
    handleClose4();
  };

  return (
    <>
      {responseGetPages.isLoading ? (
        "Loading..."
      ) : (
        <div className='adminorderpage'>
          <div className='adminorderpage_heading'>
            <PostAdd
              className='adminsidebar_icon'
              style={{ fontSize: "35px" }}
            />
            <p>All Pages</p>
          </div>
          <div className='adminorderpage_table'>
            <div className='adminorderpage_table_head allbrand_table_head allpages_add_button'>
              {responseGetPages?.data?.length < 8 && (
                <button className='addbutton' onClick={handleOpen}>
                  Add Page
                </button>
              )}
            </div>
            <div className='adminorderpage_table_table'>
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th style={{ width: "250px" }}>Page Title</th>
                    <th>Page Link</th>

                    {/* <th>Published</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Diwali Brussels</td>
                <td>https://nemesis.com/Diwali Brussels</td>

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
                  {renderedPages}
                </tbody>
              </table>
            </div>
          </div>
          <div className='adminorderpage_heading' style={{ marginTop: "20px" }}>
            <p>Privacy Policy Page</p>
          </div>
          <div className='adminorderpage_table'>
            <div className='adminorderpage_table_table'>
              <table>
                <thead>
                  <tr>
                    {/* <th>S/N</th> */}
                    <th style={{ width: "80%" }}>Page Title</th>
                    {/* <th>Page Description</th> */}

                    {/* <th>Published</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Privacy </td>
                <td>https://nemesis.com/Privacy</td>

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
                </td>
              </tr> */}
                  {responsePrivacyPolicy?.data?.map((response, index) => {
                    return (
                      <>
                        {index === 0 && (
                          <tr
                            onClick={() => {
                              setPrivacyPolicyHeadingPageId(response._id);
                              setPrivacyPolicyHeading(
                                response.privacyPolicyHeading
                              );
                              setPrivacyPolicyDescription(
                                response.privacyPolicyDescription
                              );
                            }}>
                            {/* <td>2</td> */}
                            <td style={{ width: "100%" }}>
                              {response.privacyPolicyHeading}
                            </td>
                            {/* <td>
                              {`${response.privacyPolicyDescription}`.substr(
                                0,
                                100
                              )}
                            </td> */}

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
                                onClick={handleOpen3}
                              />
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className='adminorderpage_heading' style={{ marginTop: "20px" }}>
            <p>Terms And Conditions Page</p>
          </div>
          <div className='adminorderpage_table'>
            <div className='adminorderpage_table_table'>
              <table>
                <thead>
                  <tr>
                    {/* <th>S/N</th> */}
                    <th style={{ width: "80%" }}>Page Title</th>
                    {/* <th>Page Description</th> */}

                    {/* <th>Published</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Privacy </td>
                <td>https://nemesis.com/Privacy</td>

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
                </td>
              </tr> */}
                  {responseTermsAndConditions?.data?.map((response, index) => {
                    return (
                      <>
                        {index === 0 && (
                          <tr
                            onClick={() => {
                              setTermsAndConditionsId(response._id);
                              setTermsAndConditionsHeading(
                                response.termsAndConditionsHeading
                              );
                              setTermsAndConditionsDescription(
                                response.termsAndConditionsDescription
                              );
                            }}>
                            {/* <td>2</td> */}
                            <td style={{ width: "100%" }}>
                              {response.termsAndConditionsHeading}
                            </td>
                            {/* <td>
                              {`${response.privacyPolicyDescription}`.substr(
                                0,
                                100
                              )}
                            </td> */}

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
                                onClick={handleOpen4}
                              />
                            </td>
                          </tr>
                        )}
                      </>
                    );
                  })}
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
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Page Info
                </Typography>
                <form className='modal_form' onSubmit={handleAddPage}>
                  <span>
                    <input
                      type='text'
                      placeholder='Title'
                      required
                      onChange={(e) => setPagesTitle(e.target.value)}
                    />
                  </span>
                  <span>
                    <input
                      type='text'
                      placeholder='BTN (link) www.google.com/'
                      required
                      onChange={(e) => setPagesLink(e.target.value)}
                    />
                  </span>
                  <p className='modal_form_para'>Description</p>
                  <span>
                    <JoditEditor
                      className='editor'
                      required
                      onChange={(newContent) => setPagesDescription(newContent)}
                    />
                  </span>
                  <p className='modal_form_para'>Img</p>
                  <input
                    type='file'
                    accept='image/png, image/jpeg'
                    required
                    onChange={(e) => setPagesImg(e.target.files[0])}
                  />
                  <p className='modal_form_para'>Video</p>
                  <input
                    type='file'
                    accept='video/*'
                    required
                    onChange={(e) => setPagesVideo(e.target.files[0])}
                  />
                  <p className='modal_form_para'>Gallery</p>
                  <input
                    type='file'
                    multiple
                    required
                    accept='image/png, image/jpeg'
                    // onChange={(e) => setPagesGallary(e.target.files[0])}
                    onChange={imageHandle}
                  />
                  <p className='modal_form_para'>Banner Video</p>
                  <input
                    type='file'
                    accept='video/*'
                    required
                    onChange={(e) => setPagesBannerVideo(e.target.files[0])}
                  />

                  <button className='modal_form_buttom'>Add Page</button>
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
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Page Info
                </Typography>
                <form className='modal_form' onSubmit={handleUpdatePage}>
                  <span>
                    <input
                      type='text'
                      placeholder='Title'
                      value={PagesTitle}
                      onChange={(e) => setPagesTitle(e.target.value)}
                    />
                  </span>
                  <span>
                    <input
                      type='text'
                      placeholder='BTN (link) www.google.com/'
                      value={PagesLink}
                      onChange={(e) => setPagesLink(e.target.value)}
                    />
                  </span>
                  <p className='modal_form_para'>Description</p>
                  <span>
                    <JoditEditor
                      className='editor'
                      value={PagesDescription}
                      onChange={(newContent) => setPagesDescription(newContent)}
                    />
                  </span>
                  <p className='modal_form_para'>Img</p>
                  <input
                    type='file'
                    accept='image/png, image/jpeg'
                    required
                    onChange={(e) => setPagesUpdateImg(e.target.files[0])}
                  />
                  <p className='modal_form_para'>Video</p>
                  <input
                    type='file'
                    accept='video/*'
                    required
                    onChange={(e) => setPagesUpdateVideo(e.target.files[0])}
                  />
                  <p className='modal_form_para'>Gallery</p>
                  <input
                    type='file'
                    multiple
                    required
                    accept='image/png, image/jpeg'
                    // onChange={(e) => setPagesGallary(e.target.files[0])}
                    onChange={imageUpdateHandle}
                  />
                  <p className='modal_form_para'>Banner Video</p>
                  <input
                    type='file'
                    accept='video/*'
                    required
                    onChange={(e) =>
                      setPagesBannerUpdateVideo(e.target.files[0])
                    }
                  />
                  <button className='modal_form_buttom'>Update Page</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open3}
            onClose={handleClose3}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}>
            <Fade in={open3}>
              <Box sx={style}>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Page Info
                </Typography>
                <form
                  className='modal_form'
                  onSubmit={handleUpdatePrivacyPolicyPage}>
                  <span>
                    <input
                      type='text'
                      placeholder='Title'
                      value={privacyPolicyHeading}
                      onChange={(e) => setPrivacyPolicyHeading(e.target.value)}
                    />
                  </span>
                  {/* <span>
                    <input type='text' placeholder='Page Slug' />
                  </span> */}

                  <p className='modal_form_para'>Description</p>
                  <span>
                    <JoditEditor
                      className='editor'
                      required
                      value={privacyPolicyDescription}
                      onChange={(newContent) =>
                        setPrivacyPolicyDescription(newContent)
                      }
                    />
                  </span>

                  <button className='modal_form_buttom' type='submit'>
                    Update
                  </button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open4}
            onClose={handleClose4}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}>
            <Fade in={open4}>
              <Box sx={style}>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Page Info
                </Typography>
                <form
                  className='modal_form'
                  onSubmit={handleUpdateTermsAndConditionsPage}>
                  <span>
                    <input
                      type='text'
                      placeholder='Title'
                      value={termsAndConditionsHeading}
                      onChange={(e) =>
                        setTermsAndConditionsHeading(e.target.value)
                      }
                    />
                  </span>
                  {/* <span>
                    <input type='text' placeholder='Page Slug' />
                  </span> */}

                  <p className='modal_form_para'>Description</p>
                  <span>
                    <JoditEditor
                      className='editor'
                      required
                      value={termsAndConditionsDescription}
                      onChange={(newContent) =>
                        setTermsAndConditionsDescription(newContent)
                      }
                    />
                  </span>

                  <button className='modal_form_buttom' type='submit'>
                    Update
                  </button>
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
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>Disagree</Button>
          <Button onClick={handleDeletePage}>Agree</Button>
        </DialogActions>
      </Dialog> */}
        </div>
      )}
    </>
  );
}

export default AdminPages;

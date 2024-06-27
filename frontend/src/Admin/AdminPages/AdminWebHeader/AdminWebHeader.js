import React, { useEffect } from "react";
import "./AdminWebHeader.css";
import { useState } from "react";
import { Computer, Edit } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
// import img from "../../AdminAsset/Images/Rectangle 110798.png";

import {
  useGetWebsiteHeaderQuery,
  useUpdateWebsiteHeaderMutation,
} from "../../../services/websiteHeader";

import {
  useGetAllSocialMediaQuery,
  useUpdateSocialMediaByIdMutation,
  // useGetOneSocialMediaByIdQuery,
} from "../../../services/socialMedia";

function AdminWebHeader() {
  const responseWebsiteHeader = useGetWebsiteHeaderQuery();
  const responseSocialMedia = useGetAllSocialMediaQuery();
  const [updateWebsiteHeader, responseUpdateWebsiteHeader] =
    useUpdateWebsiteHeaderMutation();
  const [updateSocialMediaById, responseUpdateSocialMediaById] =
    useUpdateSocialMediaByIdMutation();

  const [responseMsgAfterSubmit, setResponseMsgAfterSubmit] = useState("");

  useEffect(() => {
    responseSocialMedia.refetch();

    if (responseUpdateWebsiteHeader.isSuccess === true) {
      setResponseMsgAfterSubmit("Updated Successfully");
    }
  }, [
    responseUpdateSocialMediaById.isSuccess,
    responseUpdateWebsiteHeader.isSuccess,
  ]);

  const [websiteHeaderLogoImage, setWebsiteHeaderLogoImage] = useState();

  const [whatsappIconLink, setWhatsappIconLink] = useState();
  // responseSocialMedia?.data[0]?.Link
  const [facebookIconLink, setFacebookIconLink] = useState();
  // responseSocialMedia?.data[1]?.Link
  const [instagramIconLink, setInstagramIconLink] = useState();
  // responseSocialMedia?.data[2]?.Link

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

  // Whatsapp
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => setOpen1(false);
  const handleSubmitWhatsapp = (e) => {
    e.preventDefault();

    const formData = {
      Link: whatsappIconLink,
    };

    const submitData = {
      id: responseSocialMedia.data[0]._id,
      updateData: formData,
    };
    // console.log(submitData);
    updateSocialMediaById(submitData);
    handleClose1();
  };

  // Facebook
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);
  const handleSubmitFacebook = (e) => {
    e.preventDefault();

    const formData = {
      Link: facebookIconLink,
    };

    const submitData = {
      id: responseSocialMedia.data[1]._id,
      updateData: formData,
    };
    // console.log(submitData);
    updateSocialMediaById(submitData);
    handleClose2();
  };

  // Instagram
  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
    handleClose2();
  };
  const handleClose3 = () => setOpen3(false);
  const handleSubmitInstagram = (e) => {
    e.preventDefault();

    const formData = {
      Link: instagramIconLink,
    };

    const submitData = {
      id: responseSocialMedia.data[2]._id,
      updateData: formData,
    };
    // console.log(submitData);
    updateSocialMediaById(submitData);
    handleClose3();
  };

  const handleUpdateWebsiteHeader = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("websiteHeaderLogoImage", websiteHeaderLogoImage);

    // console.log(formData);
    const submitData = {
      id: responseWebsiteHeader?.data[0]?._id,
      updateData: formData,
    };
    updateWebsiteHeader(submitData);
  };
  return (
    <div className='adminorderpage '>
      <div className='adminorderpage_heading adminabout'>
        <Computer className='adminsidebar_icon' style={{ fontSize: "35px" }} />
        <p> Website header </p>
      </div>
      <div className='adminorderpage_table adminabout'>
        <form className='modal_form' onSubmit={handleUpdateWebsiteHeader}>
          <p className='modal_form_para'>Navbar Logo</p>
          <input
            type='file'
            required
            accept='image/png, image/jpeg'
            onChange={(e) => setWebsiteHeaderLogoImage(e.target.files[0])}
          />
          <div>
            <button className='modal_form_buttom'>Update NavBar</button>
            <h3 style={{ color: "green" }}>{responseMsgAfterSubmit}</h3>
          </div>
        </form>
      </div>
      <div className='adminorderpage_table_table adminabout'>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th style={{ width: "250px" }}>Name of Links</th>
              <th>links </th>
              <th>Published</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ width: "250px" }}>WhatsApp</td>

              <td>
                {responseSocialMedia?.data?.slice(0, 1).map((data) => {
                  return `https://${data.Link}`;
                })}
              </td>
              {/* <td>
                <label class='switch'>
                  <input type='checkbox' />
                  <span class='slider round'></span>
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
            <tr>
              <td>2</td>
              <td style={{ width: "250px" }}>Facebook</td>

              <td>
                {responseSocialMedia?.data?.slice(1, 2).map((data) => {
                  return `https://${data.Link}`;
                })}
              </td>
              {/* <td>
                <label class='switch'>
                  <input type='checkbox' />
                  <span class='slider round'></span>
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
                  onClick={handleOpen2}
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
            <tr>
              <td>3</td>
              <td style={{ width: "250px" }}>Instagram</td>

              <td>
                {responseSocialMedia?.data?.slice(2, 3).map((data) => {
                  return `https://${data.Link}`;
                })}
              </td>
              {/* <td>
                <label class='switch'>
                  <input type='checkbox' />
                  <span class='slider round'></span>
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
          </tbody>
        </table>
      </div>
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
              Icon Info
            </Typography>
            <form className='modal_form' onSubmit={handleSubmitWhatsapp}>
              <span>
                <input
                  type='text'
                  placeholder='Icon Link'
                  value={whatsappIconLink}
                  onChange={(e) => setWhatsappIconLink(e.target.value)}
                />
              </span>

              <button className='modal_form_buttom'>Add Banner</button>
            </form>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open2}>
          <Box sx={style}>
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Icon Info
            </Typography>
            <form className='modal_form' onSubmit={handleSubmitFacebook}>
              <span>
                <input
                  type='text'
                  placeholder='Icon Link'
                  value={facebookIconLink}
                  onChange={(e) => setFacebookIconLink(e.target.value)}
                />
              </span>

              <button className='modal_form_buttom'>Add Banner</button>
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
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Icon Info
            </Typography>
            <form className='modal_form' onSubmit={handleSubmitInstagram}>
              <span>
                <input
                  type='text'
                  placeholder='Icon Link'
                  value={instagramIconLink}
                  onChange={(e) => setInstagramIconLink(e.target.value)}
                />
              </span>

              <button className='modal_form_buttom'>Add Banner</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminWebHeader;

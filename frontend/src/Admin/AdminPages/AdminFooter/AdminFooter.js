import { Dvr, Edit } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
// import img from "../../AdminAsset/Images/Rectangle 110798.png";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";

import {
  useGetfooterQuery,
  useUpdatefooterMutation,
} from "../../../services/footer";

import {
  useGetAllSocialMediaQuery,
  useUpdateSocialMediaByIdMutation,
  // useGetOneSocialMediaByIdQuery,
} from "../../../services/socialMedia";

function AdminFooter() {
  const responseFooter = useGetfooterQuery();
  const responseSocialMedia = useGetAllSocialMediaQuery();

  const [updatefooter, responseUpdateFooter] = useUpdatefooterMutation();
  const [updateSocialMediaById, responseUpdateSocialMediaById] =
    useUpdateSocialMediaByIdMutation();

  const [responseMsgAfterSubmit, setResponseMsgAfterSubmit] = useState("");

  console.log(responseUpdateFooter);

  useEffect(() => {
    responseSocialMedia.refetch();

    if (responseUpdateFooter.isSuccess === true) {
      setResponseMsgAfterSubmit("Updated Successfully");
    }
  }, [responseUpdateSocialMediaById.isSuccess, responseUpdateFooter.isSuccess]);
  // console.log(responseFooter);
  const [footerLogoImage, setFooterLogoImage] = useState();

  const [footerTitle, setFooterTitle] = useState();
  // responseFooter?.data[0]?.footerTitle
  const [footerDescription, setFooterDescription] = useState();
  // responseFooter?.data[0]?.footerDescription
  const [footerEmail, setFooterEmail] = useState();
  // responseFooter?.data[0]?.footerEmail
  const [footerAddress, setFooterAddress] = useState();
  // responseFooter?.data[0]?.footerAddress
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
      id: responseSocialMedia?.data[0]?._id,
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

  const handleUpdateFooter = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("footerLogoImage", footerLogoImage);
    formData.append("footerTitle", footerTitle);
    formData.append("footerDescription", footerDescription);
    formData.append("footerEmail", footerEmail);
    formData.append("footerAddress", footerAddress);

    console.log(formData);
    const submitData = {
      id: responseFooter.data[0]._id,
      updateData: formData,
    };
    updatefooter(submitData);
  };
  return (
    <div className='adminorderpage '>
      <div className='adminorderpage_heading adminabout'>
        <Dvr className='adminsidebar_icon' style={{ fontSize: "35px" }} />
        <p> Website Footer </p>
      </div>
      <div className='adminorderpage_table adminabout'>
        <form className='modal_form' onSubmit={handleUpdateFooter}>
          <p className='modal_form_para'>Website Footer Information</p>
          <p className='modal_form_para'>Footer Logo</p>
          <input
            type='file'
            required
            accept='image/png, image/jpeg'
            onChange={(e) => setFooterLogoImage(e.target.files[0])}
          />
          <span>
            <input
              type='text'
              placeholder='Title'
              required
              value={footerTitle}
              onChange={(e) => setFooterTitle(e.target.value)}
            />
          </span>
          <span>
            <input
              type='text'
              placeholder='Description'
              required
              value={footerDescription}
              onChange={(e) => setFooterDescription(e.target.value)}
            />
          </span>

          <p className='modal_form_para'>Website Footer Configuration</p>
          <span>
            <input
              type='text'
              placeholder='enter email address'
              required
              value={footerEmail}
              onChange={(e) => setFooterEmail(e.target.value)}
            />
          </span>
          <span>
            <input
              type='text'
              placeholder='Address'
              required
              value={footerAddress}
              onChange={(e) => setFooterAddress(e.target.value)}
            />
          </span>
          <div>
            <button className='modal_form_buttom'>Update Footer</button>
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
              {/* <th>Published</th> */}
              <th>Action</th>
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

              <button className='modal_form_buttom'>Submit</button>
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

              <button className='modal_form_buttom'>Submit</button>
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

              <button className='modal_form_buttom'>Submit</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminFooter;

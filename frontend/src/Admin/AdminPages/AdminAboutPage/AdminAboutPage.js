import React, { forwardRef, useState } from "react";
import "./AdminAboutPage.css";
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
  MenuItem,
  Modal,
  Select,
  Slide,
  Typography,
} from "@mui/material";
import {
  Delete,
  Edit,
  EventAvailable,
  Info,
  Search,
} from "@mui/icons-material";

import {
  useGetAboutUsQuery,
  useUpdateAboutUsMutation,
} from "../../../services/aboutus";

import { useEffect } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function AdminAboutPage() {
  const responseAboutUs = useGetAboutUsQuery();
  // console.log(responseAboutUs);
  const [updateAboutUs, responseUpdateAboutUs] = useUpdateAboutUsMutation();

  // const [BGDescription, setBGDescription] = useState(
  //   responseAboutUs?.data[0]?.BGDescription
  // );
  const [bgimg, setbgimg] = useState();
  // const [BGSubTitle, setBGSubTitle] = useState(
  //   responseAboutUs?.data[0]?.BGSubTitle
  // );
  // const [BGTitle, setBGTitle] = useState(responseAboutUs?.data[0]?.BGTitle);
  const [CeoDeatils, setCeoDeatils] = useState();
  // responseAboutUs?.data[0]?.CeoDeatils
  const [ceoimg, setceoimg] = useState();
  const [Description, setDescription] = useState();
  // responseAboutUs?.data[0]?.Description
  const [FirstDescription, setFirstDescription] = useState();
  // responseAboutUs?.data[0]?.FirstDescription
  const [firstimg, setfirstimg] = useState();
  const [FirstSubTitle, setFirstSubTitle] = useState();
  // responseAboutUs?.data[0]?.FirstSubTitle
  const [FirstTitle, setFirstTitle] = useState();
  // responseAboutUs?.data[0]?.FirstTitle
  const [SecondDescription, setSecondDescription] = useState();
  // responseAboutUs?.data[0]?.SecondDescription
  const [secondimg, setsecondimg] = useState();
  const [SecondSubTitle, setSecondSubTitle] = useState();
  // responseAboutUs?.data[0]?.SecondSubTitle
  const [SecondTitle, setSecondTitle] = useState();
  // responseAboutUs?.data[0]?.SecondTitle
  // const [ShortDescription, setShortDescription] = useState(
  //   responseAboutUs?.data[0]?.ShortDescription
  // );

  const [responseMsgAfterSubmit, setResponseMsgAfterSubmit] = useState("");

  useEffect(() => {
    if (responseUpdateAboutUs.isSuccess === true) {
      setResponseMsgAfterSubmit("Updated Successfully");
    }
  }, [responseUpdateAboutUs.isSuccess]);

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
    outline: "0",
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
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleAboutUsSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("bgimg", bgimg);
    formData.append("CeoDeatils", CeoDeatils);
    formData.append("ceoimg", ceoimg);
    formData.append("Description", Description);
    formData.append("FirstDescription", FirstDescription);
    formData.append("firstimg", firstimg);
    formData.append("FirstSubTitle", FirstSubTitle);
    formData.append("FirstTitle", FirstTitle);
    formData.append("SecondDescription", SecondDescription);
    formData.append("secondimg", secondimg);
    formData.append("SecondSubTitle", SecondSubTitle);
    formData.append("SecondTitle", SecondTitle);

    // console.log(formData);

    const submitData = {
      id: responseAboutUs?.data[0]?._id,
      updateData: formData,
    };

    updateAboutUs(submitData);
  };
  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <Info className='adminsidebar_icon' style={{ fontSize: "35px" }} />
        <p>About Us</p>
      </div>
      <div className='adminorderpage_table adminabout'>
        <form className='modal_form' onSubmit={handleAboutUsSubmit}>
          <p className='modal_form_para'>BG IMG</p>

          <input
            type='file'
            required
            accept='image/png, image/jpeg'
            onChange={(e) => setbgimg(e.target.files[0])}
          />
          <span>
            <input
              type='text'
              placeholder='First Section Title'
              value={FirstTitle}
              onChange={(e) => setFirstTitle(e.target.value)}
            />
          </span>
          <span>
            <input
              type='text'
              placeholder='First Section Subtitle'
              value={FirstSubTitle}
              onChange={(e) => setFirstSubTitle(e.target.value)}
            />
          </span>
          <p className='modal_form_para'>Description</p>
          <span>
            <textarea
              rows={5}
              value={FirstDescription}
              onChange={(e) => setFirstDescription(e.target.value)}
            />
          </span>
          <p className='modal_form_para'>First Section Image</p>
          <input
            type='file'
            required
            onChange={(e) => setfirstimg(e.target.files[0])}
          />
          <span>
            <input
              type='text'
              placeholder='Second Section Title'
              value={SecondTitle}
              onChange={(e) => setSecondTitle(e.target.value)}
            />
          </span>
          <span>
            <input
              type='text'
              placeholder='Second Section Subtitle'
              value={SecondSubTitle}
              onChange={(e) => setSecondSubTitle(e.target.value)}
            />
          </span>
          <p className='modal_form_para'>Description</p>
          <span>
            <textarea
              rows={5}
              value={SecondDescription}
              onChange={(e) => setSecondDescription(e.target.value)}
            />
          </span>
          <p className='modal_form_para'>Second Section Image</p>
          <input
            type='file'
            required
            onChange={(e) => setsecondimg(e.target.files[0])}
          />
          <p className='modal_form_para'>Ceo Details</p>
          <span>
            <input
              type='text'
              placeholder='CEO Name'
              value={CeoDeatils}
              onChange={(e) => setCeoDeatils(e.target.value)}
            />
          </span>
          <p className='modal_form_para'>Ceo Image</p>
          <input
            type='file'
            required
            onChange={(e) => setceoimg(e.target.files[0])}
          />
          <p className='modal_form_para'>Long - Description</p>
          <span>
            <textarea
              rows={5}
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </span>
          <div>
            <button className='modal_form_buttom'>Update</button>
            <h3 style={{ color: "green" }}>{responseMsgAfterSubmit}</h3>
          </div>
        </form>
      </div>
      <div className='adminorderpage_pagination'></div>
      {/* <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Create Event
                </Typography>
                <form className="modal_form">
                  <span>
                    <input type="text" placeholder="Event Title" />
                  </span>
                  <span>
                    <input type="text" placeholder="Organizer" />
                  </span>
                  <span>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </span>
                  <span>
                    <input type="text" placeholder="Venue" />
                  </span>
                  <span>
                    <input type="text" placeholder="Location" />
                  </span>
    
                  <p className="modal_form_para">Time</p>
                  <div>
                    <span>
                        <input type="time" />
                    </span>
                    <span>
                    <input type="time" />
                    </span>
                  </div>
                 <p className="modal_form_para">Date</p>
                  <div>
                    <span>
                        <input type="date" />
                    </span>
                    <span>
                    <input type="date" />
                    </span>
                  </div>
                  <p className="modal_form_para">Short Description</p>
                  <span>
                    <textarea rows={5}/>
                  </span>
                   <p className="modal_form_para">Description</p>
                  <span>
                    <textarea rows={5}/>
                  </span>
                  <p className="modal_form_para">Images</p>
    
                  <input type="file" />
                  <button className="modal_form_buttom">Add Banner</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open1}
            onClose={handleClose1}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={open1}>
              <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                  Create Event
                </Typography>
                <form className="modal_form">
                  <span>
                    <input type="text" placeholder="Event Title" />
                  </span>
                  <span>
                    <input type="text" placeholder="Organizer" />
                  </span>
                  <span>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </span>
                  <span>
                    <input type="text" placeholder="Venue" />
                  </span>
                  <span>
                    <input type="text" placeholder="Location" />
                  </span>
    
                  <p className="modal_form_para">Time</p>
                  <div>
                    <span>
                        <input type="time" />
                    </span>
                    <span>
                    <input type="time" />
                    </span>
                  </div>
                 <p className="modal_form_para">Date</p>
                  <div>
                    <span>
                        <input type="date" />
                    </span>
                    <span>
                    <input type="date" />
                    </span>
                  </div>
                  <p className="modal_form_para">Short Description</p>
                  <span>
                    <textarea rows={5}/>
                  </span>
                   <p className="modal_form_para">Description</p>
                  <span>
                    <textarea rows={5}/>
                  </span>
                  <p className="modal_form_para">Images</p>
    
                  <input type="file" />
                  <button className="modal_form_buttom">Add Banner</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Dialog
            open={open2}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2}>Disagree</Button>
              <Button onClick={handleClose2}>Agree</Button>
            </DialogActions>
          </Dialog> */}
    </div>
  );
}

export default AdminAboutPage;

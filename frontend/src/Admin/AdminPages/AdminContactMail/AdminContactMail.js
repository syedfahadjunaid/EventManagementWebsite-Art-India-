import React, { forwardRef, useEffect } from "react";
import "./AdminContactMail.css";
// import img from "../../AdminAsset/Images/Rectangle 110798.png";
import { useState } from "react";
import {
  ConnectWithoutContact,
  Delete,
  // Edit,
  // List,
  Reply,
  Search,
} from "@mui/icons-material";
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

import {
  // useCreateContactMutation,
  useDeleteContactByIdMutation,
  useGetContactsQuery,
  // useGetOneContactByIdQuery,
  // useUpdateContactByIdMutation,
} from "../../../services/contact";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function AdminContactMail() {
  const responseGetContacts = useGetContactsQuery();
  const [deleteContactById, responseDeleteContactById] =
    useDeleteContactByIdMutation();
  console.log(responseDeleteContactById);

  useEffect(() => {
    responseGetContacts.refetch();
  }, [responseDeleteContactById.isSuccess]);

  const [contactData, setContactData] = useState("");
  // console.log(contactData);

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
  // const [open1, setOpen1] = useState(false);
  // const handleOpen1 = () => setOpen1(true);
  // const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleDeleteById = () => {
    deleteContactById(contactData._id);
    handleClose2();
  };

  const [search, setSearch] = useState("");

  const filteredData = responseGetContacts?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.contactEmail.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedContacts = filteredData.map((contact, index) => {
    return (
      <tr key={index} onClick={() => setContactData(contact)}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>{contact.contactName}</td>
        <td>{contact.contactEmail}</td>

        <td>{contact.contactPhoneNumber}</td>
        <td>
          <Reply
            style={{
              color: "#6E798C",
              marginLeft: "5px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={handleOpen}
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
        <ConnectWithoutContact
          className='adminsidebar_icon'
          style={{ fontSize: "35px" }}
        />
        <p>Contact Mail Info </p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          <span>
            {/* <p>#ID</p> */}
            <input
              type='text'
              placeholder='Search by email'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </span>
        </div>
        <div className='adminorderpage_table_table'>
          {filteredData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th style={{ width: "250px" }}>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                <td>1</td>
                <td style={{ width: "250px" }}>Havier Neymi</td>
                <td>Nemesis@gmail.com</td>

                <td>+91 545545454545</td>
                <td>
                  <Reply
                    style={{
                      color: "#6E798C",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
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
                {renderedContacts.reverse()}
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
            <form className='modal_form'>
              <p className='modal_form_para'>Reply</p>
              <span>
                <textarea value={contactData.contactMessage} rows={5} />
              </span>
              <span>
                <textarea rows={5} placeholder='Your Responsive' />
              </span>

              <button className='modal_form_buttom'>Your Reply</button>
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
          <Button onClick={handleDeleteById}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AdminContactMail;

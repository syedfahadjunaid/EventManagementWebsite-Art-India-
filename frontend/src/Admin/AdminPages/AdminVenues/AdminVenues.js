import React, {
  // forwardRef,
  useState,
  useEffect,
} from "react";
import "./AdminVenues.css";
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
  List,
  Modal,
  // Slide,
  Typography,
} from "@mui/material";
import {
  // Delete,
  Edit,
  Search,
} from "@mui/icons-material";
// import JoditEditor from "jodit-react";

// import {
//   useGetBlogsQuery,
//   useGetBlogByIdQuery,
//   useCreateBlogMutation,
//   useUpdateBlogByIdMutation,
//   useDeleteBlogByIdMutation,
// } from "../../../services/blog";

import {
  useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  useUpdateVenueByIdMutation,
} from "../../../services/venues";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction='up' ref={ref} {...props} />;
// });
function AdminBlog() {
  const responseGetAllVenues = useGetVenuesQuery();
  // console.log(responseGetAllVenues);

  const [createVenue, responseCreateVenue] = useCreateVenueMutation();
  const [updateVenueById, responseUpdateVenueById] =
    useUpdateVenueByIdMutation();

  useEffect(() => {
    responseGetAllVenues.refetch();
  }, [responseCreateVenue.isSuccess, responseUpdateVenueById.isSuccess]);

  const [venueId, setVenueId] = useState();

  // Create Venue States
  const [VenueName, setVenueName] = useState();
  const [VenueAddress, setVenueAddress] = useState();
  const [VenueDescription, setVenueDescription] = useState();
  const [VenueImage, setVenueImage] = useState();
  const [VenueSeats, setVenueSeats] = useState();

  // Update Venue States
  const [updateVenueName, setUpdateVenueName] = useState();
  const [updateVenueAddress, setUpdateVenueAddress] = useState();
  const [updateVenueDescription, setUpdateVenueDescription] = useState();
  const [updateVenueImage, setUpdateVenueImage] = useState();
  const [updateVenueSeats, setUpdateVenueSeats] = useState();

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
  // const [open2, setOpen2] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen2(true);
  // };

  // const handleClose2 = () => {
  //   setOpen2(false);
  // };

  const handleCreateVenue = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("VenuesName", VenueName);
    formData.append("VenuesAddress", VenueAddress);
    formData.append("VenueDescription", VenueDescription);
    formData.append("VenueImage", VenueImage);
    formData.append("VenueSeats", VenueSeats);

    createVenue(formData);
    handleClose();
  };

  const handleUpdateVenue = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("VenuesName", updateVenueName);
    formData.append("VenuesAddress", updateVenueAddress);
    formData.append("VenueDescription", updateVenueDescription);
    formData.append("VenueImage", updateVenueImage);
    formData.append("VenueSeats", updateVenueSeats);

    const dataToUpdate = {
      id: venueId,
      updateData: formData,
    };

    updateVenueById(dataToUpdate);
    handleClose1();
  };

  // const handleDeleteById = () => {
  //   setOpen2(false);
  //   deleteBlogById(blogData._id);
  // };

  const [search, setSearch] = useState("");

  const filteredData = responseGetAllVenues?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.VenuesName.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedTable = filteredData.map((mappedData, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setUpdateVenueName(mappedData.VenuesName);
          setUpdateVenueAddress(mappedData.VenuesAddress);
          setVenueId(mappedData._id);
          setUpdateVenueDescription(mappedData.VenueDescription);
          setUpdateVenueSeats(mappedData.VenueSeats);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>{mappedData.VenuesName}</td>
        {/* <td>
          <img
            className=''
            style={{ width: "80px", height: "80px" }}
            src={`${process.env.React_App_Base_Image_Url}${mappedData.blogImage}`}
            alt=''
          />
        </td> */}
        <td>{mappedData.VenuesAddress}</td>
        <td>{mappedData.VenueSeats}</td>

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
  });
  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <List className='adminsidebar_icon' style={{ fontSize: "35px" }} />
        <p>Venues</p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          <span>
            {/* <p>#ID</p> */}
            <input
              type='text'
              placeholder='Search by venue name'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </span>
          <button className='addbutton' onClick={handleOpen}>
            Add Venue
          </button>
        </div>
        <div className='adminorderpage_table_table'>
          {filteredData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>S/N</th>

                  <th>Venue Name</th>
                  {/* <th style={{ width: "250px" }}>IMG</th> */}
                  <th>Venue Address</th>
                  {/* <th>Published</th> */}
                  <th>Seats</th>
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
              Create Venue
            </Typography>
            <form className='modal_form' onSubmit={handleCreateVenue}>
              <p>Venue Name</p>
              <span>
                <input
                  type='text'
                  required
                  placeholder='Venue Name'
                  onChange={(e) => setVenueName(e.target.value)}
                />
              </span>

              <p>Venue Seats</p>
              <span>
                <input
                  type='number'
                  required
                  placeholder='Venue Seats'
                  onChange={(e) => setVenueSeats(e.target.value)}
                  onWheel={(e) => e.target.blur()}
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
              <p>Venue Address</p>
              <span>
                <textarea
                  type='text'
                  required
                  placeholder='Venue Address'
                  rows={8}
                  onChange={(e) => setVenueAddress(e.target.value)}
                />
              </span>
              <p>Venue Description</p>
              <span>
                <textarea
                  type='text'
                  required
                  placeholder='Venue Description'
                  rows={8}
                  onChange={(e) => setVenueDescription(e.target.value)}
                />
              </span>

              <p>Venue Image</p>

              <input
                type='file'
                required
                accept='image/png, image/jpeg'
                onChange={(e) => setVenueImage(e.target.files[0])}
              />

              <button className='modal_form_buttom'>Add Venue</button>
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
              Update Venue
            </Typography>
            <form className='modal_form' onSubmit={handleUpdateVenue}>
              <p>Venue Name</p>
              <span>
                <input
                  type='text'
                  placeholder='Venue Name'
                  required
                  value={updateVenueName}
                  onChange={(e) => setUpdateVenueName(e.target.value)}
                />
              </span>

              <p>Venue Seats</p>
              <span>
                <input
                  type='number'
                  placeholder='Venue Seats'
                  required
                  value={updateVenueSeats}
                  onChange={(e) => setUpdateVenueSeats(e.target.value)}
                  onWheel={(e) => e.target.blur()}
                />
              </span>
              {/* <span>
                <input
                  type='text'
                  required
                  placeholder='Tag'
                  value={updateBlogTag}
                  onChange={(e) => setUpdateBlogTag(e.target.value)}
                />
              </span> */}
              <p>Venue Address</p>
              <span>
                <textarea
                  type='text'
                  required
                  placeholder='Venue Address'
                  value={updateVenueAddress}
                  rows={8}
                  onChange={(e) => setUpdateVenueAddress(e.target.value)}
                />
              </span>
              <p>Venue Description</p>
              <span>
                <textarea
                  type='text'
                  required
                  placeholder='Venue Description'
                  rows={8}
                  value={updateVenueDescription}
                  onChange={(e) => setUpdateVenueDescription(e.target.value)}
                />
              </span>
              <p>Venue Image</p>

              <input
                type='file'
                required
                accept='image/png, image/jpeg'
                onChange={(e) => setUpdateVenueImage(e.target.files[0])}
              />

              {/* <p className='modal_form_para'>Description</p>
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
              /> */}
              <button className='modal_form_buttom'>Update Venue</button>
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
      </Dialog> */}
    </div>
  );
}

export default AdminBlog;

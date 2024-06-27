import React from "react";
import "./AdminBooking.css";
// import { forwardRef } from "react";
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
  // Slide,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { EventAvailable, Search, Visibility } from "@mui/icons-material";

import {
  // useCreateOrderMutation,
  // useGetOrderByIdQuery,
  useGetOrdersQuery,
} from "../../../services/orders";

import {
  // useCreateEventMutation,
  useGetEventsQuery,
  // useGetOneEventByIdQuery,
  // useUpdateEventByIdMutation,
} from "../../../services/events";

import {
  // useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "../../../services/venues";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction='up' ref={ref} {...props} />;
// });
function AdminBooking() {
  const responseGetOrders = useGetOrdersQuery();
  const responseGetEvents = useGetEventsQuery();
  const responseGetVenues = useGetVenuesQuery();

  const [orderData, setOrderData] = useState([]);

  const event = responseGetEvents?.data?.filter(
    (event) => orderData.OrderEventId === event.EventId
  );

  const venue = responseGetVenues?.data?.filter(
    (venue) => event[0]?.venueId === venue._id
  );
  // console.log(venue);
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
    // outline: "0",
    borderRadius: "5px",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [search, setSearch] = useState("");

  const filteredData = responseGetOrders?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.OrderUserName.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedTable = filteredData.map((mappedData, index) => {
    return (
      <tr key={index} onClick={() => setOrderData(mappedData)}>
        <td>{index + 1}</td>
        <td>{mappedData.OrderId}</td>
        <td>{mappedData.OrderUserName}</td>
        <td>{mappedData.UserEmail}</td>
        <td>{mappedData.UserMobile}</td>
        {/* <td>Processing</td> */}
        <td>₹ {mappedData.OrderPrice}</td>
        <td>
          <Visibility style={{ cursor: "pointer" }} onClick={handleOpen} />
        </td>
      </tr>
    );
  });

  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <EventAvailable
          className='adminsidebar_icon'
          style={{ fontSize: "35px" }}
        />
        <p>Bookings</p>
      </div>
      <div className='adminorderpage_table'>
        <div className='adminorderpage_table_head allbrand_table_head'>
          <span>
            {/* <p>#ID</p> */}
            <input
              type='text'
              placeholder='Search by customer name'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search />
          </span>
        </div>
        <div className='adminorderpage_table_table'>
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Order Code</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Number</th>
                {/* <th>Payment Status</th> */}
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>#G-Store:22</td>
                <td style={{ width: "250px" }}>Nemesis</td>
                <td>NEMESIS@gmail.com</td>
                <td>9454545454</td>
                <td>Processing</td>
                <td>Room</td>
                <td>
                  <Visibility onClick={handleOpen} />
                </td>
              </tr> */}
              {renderedTable.reverse()}
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
            <Typography id='transition-modal-title' variant='h6' component='h2'>
              Booking Details
            </Typography>
            <div
              style={{
                overflowY: "scroll",
                height: "400px",
                padding: "0 1rem",
              }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Booking Id</p>
                <strong>{orderData?.OrderId}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Customer Name</p>
                <strong>{orderData?.OrderUserName}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Customer Email</p>
                <strong>{orderData?.UserEmail}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Customer Contact</p>
                <strong>{orderData?.UserMobile}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Number Of Seats</p>
                <strong>{orderData?.Numberofseat}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Price</p>
                <strong>₹ {event[0]?.EventPrice}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Total Amount</p>
                <strong>₹ {orderData?.OrderPrice}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Date</p>
                <strong>{orderData?.EventDate?.substr(0, 10)}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Time</p>
                <strong>{orderData?.EventTime}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Id</p>
                <strong>{orderData?.OrderEventId}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Name</p>
                <strong>{event[0]?.EventName}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Type</p>
                <strong>{event[0]?.EventType}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Event Organizer</p>
                <strong>{event[0]?.EventOrganizer}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Venue Id</p>
                <strong>{event[0]?.venueId}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Venue Name</p>
                <strong>{venue[0]?.VenuesName}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid black",
                  padding: "6px",
                }}>
                <p>Venue Address</p>
                <strong>{venue[0]?.VenuesAddress}</strong>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminBooking;

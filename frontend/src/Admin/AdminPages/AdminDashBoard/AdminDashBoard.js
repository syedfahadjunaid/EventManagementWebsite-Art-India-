import React from "react";
import "./AdminDashBoard.css";
import img from "../../AdminAsset/Images/Mask group.png";
import img2 from "../../AdminAsset/Images/image 3.png";
import img1 from "../../AdminAsset/Images/image 2.png";
import { Visibility } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";

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

function AdminDashBoard() {
  const responseGetOrders = useGetOrdersQuery();
  const responseGetEvents = useGetEventsQuery();
  const responseGetVenues = useGetVenuesQuery();

  // console.log(responseGetOrders);

  const [orderData, setOrderData] = useState([]);

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

  const renderedTable = responseGetOrders?.data?.map((mappedData, index) => {
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
          <Visibility onClick={handleOpen} />
        </td>
      </tr>
    );
  });

  let totalEarning = responseGetOrders?.data?.reduce(function (prev, current) {
    return prev + +current.OrderPrice;
  }, 0);

  let totalBooking = responseGetOrders?.data?.reduce(function (prev, current) {
    return prev + +current.Numberofseat;
  }, 0);

  // console.log(totalEarning);

  return (
    <>
      {responseGetOrders.isLoading &&
      responseGetEvents.isLoading &&
      responseGetVenues.isLoading ? (
        "Loading..."
      ) : (
        <div className='admindashboard'>
          <div className='admindashboard_first'>
            <div style={{ backgroundColor: "#FFB172" }}>
              <p>Total Earning</p>
              <div>
                <span>
                  <img src={img} alt='logo' />
                </span>
                <strong>₹ {totalEarning}</strong>
              </div>
            </div>
            <div style={{ backgroundColor: "#F83B5B" }}>
              <p>Total Tickets Booked</p>
              <div>
                <span>
                  <img src={img1} alt='logo' />
                </span>
                <strong>{totalBooking}</strong>
              </div>
            </div>
            <div style={{ backgroundColor: "#99B6FF" }}>
              <p>Total Bookings</p>
              <div>
                <span>
                  <img src={img2} alt='logo' />
                </span>
                <strong>{responseGetOrders?.data?.length}</strong>
              </div>
            </div>
          </div>
          <div className='admindashboard_second'>
            <p>Events booking</p>
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
                <tbody>{renderedTable?.reverse()}</tbody>
              </table>
            </div>
          </div>
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
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
    </>
  );
}

export default AdminDashBoard;

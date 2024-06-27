import React from "react";
import "./BookNowThankYouPage.css";

import {
  // useCreateOrderMutation,
  useGetOrderByIdQuery,
  // useGetOrdersQuery,
} from "../../services/orders";

import { useParams } from "react-router-dom";
function BookNowThankYouPage() {
  const { bookingId } = useParams();

  const responseOrderById = useGetOrderByIdQuery(bookingId);
  // console.log(responseOrderById);

  // const getOrderById = responseOrders?.data?.find(
  //   (order) => bookingId === order._id
  // );
  // console.log(getOrderById);

  return (
    <>
      {responseOrderById.isLoading ? (
        "Loading..."
      ) : (
        <div className='booknowthankyoupage'>
          <div className='booknowthankyoupage_background'>
            <h3>Thank You So Much For Booking</h3>
            <p>Your order number </p>
            <p style={{ fontWeight: "600" }}>
              "{responseOrderById?.data?.OrderId}"
            </p>
            <p>Name: {responseOrderById?.data?.OrderUserName}</p>
            <p>Date: {responseOrderById?.data?.EventDate.substr(0, 10)}</p>
            <p>Time: {responseOrderById?.data?.EventTime}</p>
            <p>Email: {responseOrderById?.data?.UserEmail}</p>
            <p>Mobile: {responseOrderById?.data?.UserMobile}</p>
            <p>Order Total: ₹ {responseOrderById?.data?.OrderPrice}</p>
            <p>Number Of Seats: {responseOrderById?.data?.Numberofseat}</p>
            {/* <p className='booknowthankyoupage_background_para'>
              Thank you so much booking.
            </p> */}
          </div>
        </div>
      )}
    </>
  );
}

export default BookNowThankYouPage;

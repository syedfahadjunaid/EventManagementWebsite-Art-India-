import { useEffect, useState } from "react";
import "./BookNow.css";
// import AccessAlarm from "@mui/icons-material/AccessAlarm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import {
  useCreateOrderMutation,
  // useGetOrderByIdQuery,
  // useGetOrdersQuery,
} from "../../services/orders";

import {
  // useCreateEventSeatsMutation,
  // useGetEventSeatsByIdQuery,
  useGetEventSeatsQuery,
  useUpdateEventSeatsByIdMutation,
} from "../../services/eventSeats";
function BookNowPayment({
  totalPrice,
  numberOfSeats,
  selectSlot,
  dateValue,
  eventData,
  remainingSeats,
  venueData,
}) {
  const responseEventSeats = useGetEventSeatsQuery();

  const [createOrder, responseCreateOrder] = useCreateOrderMutation();
  console.log(responseCreateOrder);

  const [loader, setLoader] = useState(false);

  const [
    updateEventSeatsById,
    // responseUpdateEventSeatsById
  ] = useUpdateEventSeatsByIdMutation();

  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (responseCreateOrder.isSuccess) {
        history(
          `/bookingconfirmation/${responseCreateOrder?.data?.savedOrder?.OrderId}`
        );
        setLoader(false);
      }
    }, [3000]);
  }, [responseCreateOrder.isSuccess]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const findIndexAccordingToEventId = responseEventSeats?.data?.findIndex(
      (index) => eventData._id === index.EventId
    );

    const findIndexOfDate = responseEventSeats?.data[
      findIndexAccordingToEventId
    ]?.eventDates?.findIndex((index) => index.date === dateValue);

    const findIndexOfTime = responseEventSeats?.data[
      findIndexAccordingToEventId
    ]?.eventDates[findIndexOfDate]?.times?.findIndex(
      (index) => index.time === selectSlot
    );

    const updatedSeatWithTime = responseEventSeats?.data[
      findIndexAccordingToEventId
    ].eventDates[findIndexOfDate].times.map((time, index) => {
      if (index === findIndexOfTime) {
        return { ...time, numberOfSets: remainingSeats };
      }
      return time;
    });

    const updatedSeatWithDates = responseEventSeats?.data[
      findIndexAccordingToEventId
    ].eventDates.map((date, index) => {
      if (index === findIndexOfDate) {
        return { ...date, times: updatedSeatWithTime };
      }
      return date;
    });

    const updatedSeatWithEvent = responseEventSeats?.data?.map(
      (seatsData, index) => {
        if (index === findIndexAccordingToEventId) {
          return { ...seatsData, eventDates: updatedSeatWithDates };
        }
        return seatsData;
      }
    );

    const submitBookingData = {
      OrderUserName: data.name,
      UserEmail: data.email,
      UserMobile: data.contact,
      EventDate: dateValue,
      EventTime: selectSlot,
      OrderPrice: totalPrice,
      Numberofseat: numberOfSeats,
      OrderEventId: eventData.EventId,
    };
    createOrder(submitBookingData);

    const event = updatedSeatWithEvent?.find(
      (e) => eventData._id === e.EventId
    );

    const submitSeatsData = {
      id: event.EventId,
      updateData: event,
    };

    updateEventSeatsById(submitSeatsData);

    setLoader(true);
    reset();
    // history("/booknowthankyoupage");
  };

  // useEffect(() => {
  //   console.log(errors);
  // }, [errors]);
  return (
    <div className='booknowpayment'>
      <div className='booknowpayment_timer'>
        {/* <span>
          <AccessAlarm /> <p>10:00</p>
        </span> */}
      </div>
      <span className='booknowpayment_border'></span>
      <div className='booknowpayment_bottom'>
        {loader ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div className='booknowpayment_bottom_left'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <span>
                <input
                  name='name'
                  type='text'
                  placeholder='Name*'
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </span>
              {errors?.name && (
                <p className='error_message error_message1'>Required</p>
              )}
              <span>
                <input
                  type='tel'
                  name='contact'
                  placeholder='Mobile No*'
                  {...register("contact", {
                    required: true,
                    minLength: {
                      value: 10,
                      message: "Invalid Number",
                    },
                    maxLength: {
                      value: 13,
                      message: "Invalid Number",
                    },
                  })}
                />
              </span>
              {errors?.contact && (
                <p className='error_message error_message1'>Required</p>
              )}
              <span>
                <input
                  type='email'
                  placeholder='Email*'
                  name='email'
                  {...register("email", { required: true, maxLength: 20 })}
                />
              </span>
              {errors?.email && (
                <p className='error_message error_message1'>Required</p>
              )}
              <button>Create Order</button>
            </form>
          </div>
        )}
        <div className='booknowpayment_bottom_right'>
          <div className='booknowpayment_bottom_right_top'>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <p>Event Name: </p>
                <strong>{eventData.EventName}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <p>Event Type: </p>
                <strong>{eventData.EventType}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <p>Event Organizer: </p>
                <strong>{eventData.EventOrganizer}</strong>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <p>Venue Name: </p>
                <strong>{venueData.VenuesName}</strong>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <p>Number Of Seats: </p>
                <strong>{numberOfSeats}</strong>
              </div>
            </div>
          </div>
          <div className='booknowpayment_bottom_right_bottom'>
            <span>₹ {totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNowPayment;

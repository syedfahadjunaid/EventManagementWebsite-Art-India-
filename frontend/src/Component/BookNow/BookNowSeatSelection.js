import React, { useState } from "react";
import "./BookNowSeatSelection.css";

import // useCreateEventSeatsMutation,
// useGetEventSeatsByIdQuery,
// useGetEventSeatsQuery,
// useUpdateEventSeatsByIdMutation,
"../../services/eventSeats";

export default function BookNowSeatSelection({
  setSelectDate,
  setSelectPayment,
  setSelectTicket,
  // setTotalPrice,
  selectSlot,
  dateValue,
  dateAndTimeForSeats,
  venueData,
  eventData,
  setNumberOfSeats,
  setRemainingSeats,
}) {
  // const responseGetEventSeatsById = useGetEventSeatsQuery();
  // console.log(responseGetEventSeatsById);

  // console.log(selectSlot);
  // console.log(dateValue);
  // console.log(dateAndTimeForSeats);
  // console.log(venueData);
  // console.log(eventData);

  const date = dateAndTimeForSeats?.eventDates?.find(
    (date) => date.date === dateValue && date
  );
  const timing = date?.times?.find((time) => time.time === selectSlot && time);
  // const remainingSeats = dateAndTimeForSeats?.eventDates?.times?.find(
  //   (time) => time.time === selectSlot && time.numberOfSets
  // );

  const [moreThanRemainingSeats, setMoreThanRemainingSeats] = useState(false);

  const [count, setCount] = React.useState(1);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
    setNumberOfSeats(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
    setNumberOfSeats(function (prevCount) {
      if (prevCount > 1) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 1);
      }
    });
  }

  const handleBack = () => {
    setSelectDate(true);
    setSelectPayment(false);
    setSelectTicket(false);
  };

  const handleNext = () => {
    if (count > timing.numberOfSets) {
      setMoreThanRemainingSeats(true);
    } else {
      setSelectTicket(false);
      setSelectDate(false);
      setSelectPayment(true);
      setRemainingSeats(timing.numberOfSets - count);
      setMoreThanRemainingSeats(false);
    }
  };
  return (
    <div className='seatSelectionNewComponent'>
      <div className='seatSelectionNewComponent-upper'>
        <div className='seatSelectionNewComponent-upper-cards'>
          <div
            style={{ backgroundColor: "red", color: "white", padding: "6px" }}>
            {timing.numberOfSets}
          </div>
          <p>Available</p>
        </div>
        <div className='seatSelectionNewComponent-upper-cards'>
          <div
            style={{ backgroundColor: "gray", color: "white", padding: "6px" }}>
            {venueData.VenueSeats}
          </div>
          <p>Total Seats</p>
        </div>
      </div>
      <div className='seatSelectionNewComponent-panel'>
        <h2>Select Your Seats</h2>
        <h3>*Seat are based on first come first serve basis</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}>
          <div
            style={{
              padding: "1rem 4rem",
              fontSize: "22px",
              border: "1px solid black",
            }}>
            {count}
          </div>
          <div
            style={{
              padding: "10px 3rem",
              fontSize: "22px",
              border: "1px solid black",
              borderRadius: "9999px",
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              alignItems: "center",
            }}>
            <p
              onClick={decrement}
              style={{
                width: "40px",
                height: "40px",
                padding: "4px",
                borderRadius: "9999px",
                cursor: "pointer",
              }}>
              -
            </p>
            <p
              onClick={increment}
              style={{
                backgroundColor: "#E68639",
                color: "white",
                width: "40px",
                height: "40px",
                padding: "4px",
                borderRadius: "9999px",
                cursor: "pointer",
              }}>
              +
            </p>
          </div>
        </div>
        <div className='seatSelectionNewComponent-panel-price'>
          <h3>Ticket Price</h3>
          <h3>{`INR ${eventData.EventPrice}`}</h3>
        </div>
        <div className='seatSelectionNewComponent-panel-price'>
          <h3>Total Price</h3>
          <h3>{`INR ${eventData.EventPrice * count}`}</h3>
        </div>
      </div>
      <div
        className=''
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}>
        <button
          onClick={handleBack}
          style={{
            width: "fit-content",
            padding: "1rem 3rem",
            backgroundColor: "#E68639",
            color: "white",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
          }}>
          Back
        </button>
        <button
          onClick={handleNext}
          style={{
            width: "fit-content",
            padding: "1rem 3rem",
            backgroundColor: "#E68639",
            color: "white",
            fontSize: "25px",
            fontWeight: "400",
            cursor: "pointer",
          }}>
          Next
        </button>
        {moreThanRemainingSeats && (
          <strong>*you are selecting more than one remaining seats</strong>
        )}
      </div>
    </div>
  );
}

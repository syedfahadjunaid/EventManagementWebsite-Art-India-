import { useEffect, useState } from "react";
import "./BookNow.css";
// import img from "../imges/Rectangle 133.png";
import CalendarToday from "@mui/icons-material/CalendarToday";
import ConfirmationNumber from "@mui/icons-material/ConfirmationNumber";
import Payment from "@mui/icons-material/Payment";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
// import BookNowTicket from "./BookNowTicket";
import BookNowPayment from "./BookNowPayment";
import NavBar from "../Layout/NavBar/NavBar";

import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import BookNowSeatSelection from "./BookNowSeatSelection";

import {
  // useCreateEventMutation,
  // useGetEventsQuery,
  useGetOneEventByIdQuery,
  // useUpdateEventByIdMutation,
} from "../../services/events";

import {
  // useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "../../services/venues";

import {
  // useCreateEventSeatsMutation,
  // useGetEventSeatsByIdQuery,
  useGetEventSeatsQuery,
  // useUpdateEventSeatsByIdMutation,
} from "../../services/eventSeats";

import { useParams } from "react-router-dom";
function BookNow() {
  const { bookingEventID } = useParams();

  const responseGetOneEvent = useGetOneEventByIdQuery(bookingEventID);
  const responseGetEventSeats = useGetEventSeatsQuery();
  // console.log(responseGetOneEvent);

  const responseGetVenue = useGetVenuesQuery();

  const venueData = responseGetVenue?.data?.find(
    (venue) => responseGetOneEvent?.data?.Events?.venueId === venue._id && venue
  );

  const [numberOfSeats, setNumberOfSeats] = useState(1);
  const [remainingSeats, setRemainingSeats] = useState(0);

  // console.log(venueData);
  // const responseGetOneVenue = useGetOneVenueByIdQuery(
  //   responseGetOneEvent?.data?.Events?.venueId
  // );
  // const responseVenue = useGetVenuesQuery();

  // const venueData = responseVenue?.data?.find(
  //   (venue) =>
  //     responseGetOneEvent?.data?.Events?._id === bookingEventID && venue
  // );
  // console.log(responseGetOneVenue);

  const dateAndTimeForSeats = responseGetEventSeats?.data?.find(
    (data) => data.EventId === bookingEventID && data
  );

  // console.log(dateAndTimeForSeats);

  // console.log(responseGetOneEvent);
  const [dateValue, setDateValue] = React.useState("");
  const [timings, setTimings] = React.useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      responseGetOneEvent?.data?.Events?.EventPrice * numberOfSeats
    );
  }, [numberOfSeats]);

  // console.log(remainingSeats);

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  // const handleSlot1 = () => {
  //   setSelectSlot1(true);
  //   setSelectSlot2(false);
  // };
  // const handleSlot2 = () => {
  //   setSelectSlot1(false);
  //   setSelectSlot2(true);
  // };
  // const [selectSlot1, setSelectSlot1] = useState(true);
  // const [selectSlot2, setSelectSlot2] = useState(false);
  const [selectSlot, setSelectSlot] = useState("");

  const [selectDate, setSelectDate] = useState(true);
  const [selectTicket, setSelectTicket] = useState();
  const [selectPayment, setSelectPayment] = useState();
  const handleChange = () => {
    setSelectTicket(true);
    setSelectDate(false);
    setSelectPayment(false);
  };

  return (
    <>
      <NavBar />
      {responseGetOneEvent.isLoading ? (
        "Loading..."
      ) : (
        <div className='booknow'>
          <div
            className='booknow_left'
            style={{
              backgroundImage: `url("${process.env.React_App_Base_Image_Url}${responseGetOneEvent?.data?.Events?.EventImage}")`,
            }}>
            {/* <img src={img} alt="banner" /> */}
            <span
              style={{
                backgroundColor: "black",
                width: "100%",
                opacity: "70%",
              }}>
              <p style={{ fontSize: "20px" }}>
                {responseGetOneEvent?.data?.Events?.EventName}
              </p>
              <p>{`Organizer: ${responseGetOneEvent?.data?.Events?.EventOrganizer}`}</p>
              <p>{`Category: ${responseGetOneEvent?.data?.Events?.EventType}`}</p>
            </span>
          </div>
          <div className='booknow_right'>
            <div className='booknow_right_stepper'>
              <div>
                <CalendarToday />
                <span>
                  <h6>DATE</h6>
                </span>
              </div>{" "}
              <div>
                <ConfirmationNumber />
                <span>
                  <h6>SEATS</h6>
                </span>
              </div>{" "}
              <div>
                <Payment />
                <span>
                  <h6>PAYMENT</h6>
                </span>
              </div>
            </div>
            {selectDate && (
              <div className='booknow_right_bottom'>
                <div className='booknow_right_bottom_left'>
                  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={["DateCalendar", "DateCalendar"]}>
                      <DemoItem>
                        <DateCalendar
                          // value={value}
                          onChange={(newValue) => setValue(newValue)}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider> */}

                  <h3>Select Date</h3>

                  <FormControl sx={{ p: 2, minWidth: 220 }}>
                    <Select
                      value={dateValue}
                      onChange={handleDateChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}>
                      <MenuItem
                        value=''
                        onClick={() => {
                          setTimings([]);
                          setSelectSlot("");
                        }}>
                        <em>None</em>
                      </MenuItem>
                      {responseGetOneEvent?.data?.Events?.eventDates.map(
                        (dates, index) => {
                          return (
                            <MenuItem
                              onClick={() => setTimings(dates?.times)}
                              key={index}
                              value={dates?.date}>
                              {dates.date.substr(0, 10)}
                            </MenuItem>
                          );
                        }
                      )}
                      {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                    {/* <FormHelperText>Without label</FormHelperText> */}
                  </FormControl>
                </div>
                <div className='booknow_right_bottom_right'>
                  <h3>Select Time Slot</h3>

                  <div className='booknow_right_bottom_right_timeSlots'>
                    {timings?.map((time, index) => {
                      return (
                        <span
                          key={index}
                          // className={selectSlot1 ? "activeslot" : ""}
                          className={
                            selectSlot === time.time ? "activeslot" : ""
                          }
                          onClick={() => {
                            setSelectSlot(time.time);
                          }}>
                          <p>{time.time}</p>
                          {/* <p className='booknow_right_bottom_right_span_para'>
                        Almost Full
                      </p> */}
                        </span>
                      );
                    })}
                  </div>

                  <button
                    disabled={selectSlot !== "" ? false : true}
                    onClick={handleChange}>
                    Next
                  </button>
                  {selectSlot === "" && <p>*Please select date & time</p>}
                </div>
              </div>
            )}
            {/* {selectTicket && (
              <BookNowTicket
                setSelectDate={setSelectDate}
                setSelectPayment={setSelectPayment}
                setSelectTicket={setSelectTicket}
                setTotalPrice={setTotalPrice}
              />
            )} */}
            {selectTicket && (
              <BookNowSeatSelection
                setSelectDate={setSelectDate}
                setSelectPayment={setSelectPayment}
                setSelectTicket={setSelectTicket}
                setTotalPrice={setTotalPrice}
                dateValue={dateValue}
                selectSlot={selectSlot}
                dateAndTimeForSeats={dateAndTimeForSeats}
                venueData={venueData}
                eventData={responseGetOneEvent?.data?.Events}
                setNumberOfSeats={setNumberOfSeats}
                setRemainingSeats={setRemainingSeats}
              />
            )}
            {selectPayment && (
              <BookNowPayment
                numberOfSeats={numberOfSeats}
                totalPrice={totalPrice}
                dateValue={dateValue}
                selectSlot={selectSlot}
                eventData={responseGetOneEvent?.data?.Events}
                remainingSeats={remainingSeats}
                venueData={venueData}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default BookNow;

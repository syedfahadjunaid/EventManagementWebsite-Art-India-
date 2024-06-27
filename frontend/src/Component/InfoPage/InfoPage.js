import React from "react";
import "./InfoPage.css";
import img from "../imges/Rectangle 102.png";
import HeadImage from "../Layout/HeadImage/HeadImage";
// import BookingCard from "../Layout/BookingCard/BookingCard";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Layout/NavBar/NavBar";

import ShowBooking from "../ShowBooking/ShowBooking";

import {
  // useCreateEventMutation,
  // useGetEventsQuery,
  useGetOneEventByIdQuery,
  // useUpdateEventByIdMutation,
} from "../../services/events";

import {
  // useCreateVenueMutation,
  useGetOneVenueByIdQuery,
  // useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "../../services/venues";

function InfoPage() {
  const { eventId } = useParams();

  // console.log(eventId);

  const responseGetOneEvent = useGetOneEventByIdQuery(eventId);
  const responseGetOneVenue = useGetOneVenueByIdQuery(
    responseGetOneEvent?.data?.Events?.venueId
  );

  // console.log(responseGetOneVenue);

  return (
    <>
      <NavBar />
      {responseGetOneEvent.isLoading && responseGetOneVenue.isLoading ? (
        "Loading..."
      ) : (
        <div className='infopage'>
          <div className='infopage_first'>
            <div className='infopage_first_left'>
              <h3>{responseGetOneEvent?.data?.Events?.EventName}</h3>
            </div>
            <div className='infopage_first_right'>
              <img
                src={`${process.env.React_App_Base_Image_Url}${responseGetOneEvent?.data?.Events?.EventImage}`}
                alt='banner'
              />
            </div>
          </div>
          <div className='infopage_second'>
            <h3>{`${responseGetOneEvent?.data?.Events?.EventType} by ${responseGetOneEvent?.data?.Events?.EventOrganizer}`}</h3>
          </div>
          <div className='infopage_third'>
            <div className='infopage_third_content'>
              <h3>Venue</h3>
              <h4>{responseGetOneVenue?.data?.Venue?.VenuesName}</h4>
            </div>
            <div className='infopage_third_content'>
              <h3>Date & Time</h3>
              {responseGetOneEvent?.data?.Events?.eventDates?.map(
                (dates, index) => {
                  return (
                    <div key={index}>
                      <h4>{dates?.date.substr(0, 10)}</h4>
                      {dates?.times?.map((time, index) => {
                        return <h5 index={index}>{time.time}</h5>;
                      })}
                    </div>
                  );
                }
              )}
            </div>
            <div className='infopage_third_content'>
              <h3>Price</h3>
              <h4>{`INR ${responseGetOneEvent?.data?.Events?.EventPrice}`}</h4>
            </div>
            {/* <table>
          <thead>
            <tr style={{ marginBottom: "30px" }}>
              <th style={{ fontSize: "35px", fontWeight: "400" }}>Venue</th>
              <th style={{ fontSize: "35px", fontWeight: "400" }}>Date</th>
              <th style={{ fontSize: "35px", fontWeight: "400" }}>Showtime</th>
              <th style={{ fontSize: "35px", fontWeight: "400" }}>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Cube</td>
              <td>May 30, 2023</td>
              <td>7:30 PM</td>
              <td>1 h 30 mins</td>
            </tr>
          </tbody>
        </table> */}
          </div>
          <div className='infopage_four'>
            <h3>Venue Highlights</h3>
            <p>{responseGetOneVenue?.data?.Venue?.VenueDescription}</p>

            {/* <p>Free seating: Available on a first-come-first-served basis</p>

            <p>Assistive listening device available</p>

            <p>Entry for ages 7+</p> */}
            {/* <Link to={`/booking/${eventId}`} className='button'>
              Book Now
            </Link> */}
            <Link to={`/contactus`} className='button'>
              Contact Us
            </Link>
          </div>
          <div className='infopage_four'>
            <h3>Venue Address</h3>
            <p>{responseGetOneVenue?.data?.Venue?.VenuesAddress}</p>
          </div>
          <div className='infopage_five'>
            <HeadImage />
            <p style={{ fontSize: "20px", fontWeight: "600" }}>
              {responseGetOneEvent?.data?.Events?.EventShortdescription}
            </p>
            <p>{responseGetOneEvent?.data?.Events?.Eventdescription}</p>
          </div>
          <div className='infopage_six'>
            <HeadImage />
            <h3>You may also like</h3>
            <div className='infopage_six_card'>
              {/* <BookingCard />
            <BookingCard />
            <BookingCard /> */}
              <ShowBooking />
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      )}
    </>
  );
}

export default InfoPage;

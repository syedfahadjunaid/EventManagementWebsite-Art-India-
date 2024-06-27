import React from "react";
import "./Bookingcard.css";
// import img from "../../imges/TheSoundofMusicshows1682084293919 1.jpg";
// import Button from "../Button/Button";
import { Link } from "react-router-dom";
function BookingCard({ data, venue }) {
  // console.log(venue.VenuesName);
  return (
    <div className='bookingcard'>
      <div className='bookingcard_img'>
        <img
          style={{ objectFit: "cover" }}
          src={`${process.env.React_App_Base_Image_Url}${data?.EventImage}`}
          alt='booking'
        />
      </div>
      <div className='bookingcard_details' style={{ overflowY: "scroll" }}>
        <h3 style={{ fontSize: "20px" }}>{data?.EventName}</h3>
        <h3 style={{ fontSize: "16px" }}>{`by ${data?.EventOrganizer}`}</h3>
        <p>{data?.EventShortdescription}</p>
        <h6>Dates</h6>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}>
          {data?.eventDates?.map((dates, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gap: "1rem",
                  padding: "10px",
                  borderBottom: "1px solid gray",
                }}>
                <p style={{ fontSize: "14px", fontWeight: "600" }}>
                  {`${dates?.date?.substr(0, 10)}`}
                </p>
                <div
                  style={{
                    fontSize: "14px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "10px",

                    // width: "100%",
                  }}>
                  {dates?.times?.map((time, index) => {
                    return <p key={index}>{time.time}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <span>
          <h6>Venue</h6>
          <p>{venue?.VenuesName}</p>
        </span>
        <span>
          <h6>Price</h6>
          <strong>{`INR ${data?.EventPrice}`}</strong>
          {/* <p>onwards</p> */}
        </span>
      </div>
      <div
        className=''
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          gap: "1rem",
        }}>
        {/* <Link to={`/booking/${data._id}`} className='button'>
          Book Now
        </Link> */}
        <Link to={`/contactus`} className='button'>
          Contact Us
        </Link>
        <Link to={`/event/${data._id}`} className='button1'>
          Read More
        </Link>
      </div>

      {/* <div className='bookingcard_button slide-in-bottom'>
        <Link to='/booknow' className='button'>
          Book Now
        </Link>
        <Link to='/infopage/ID' className='button1'>
          Read More
        </Link>
      </div> */}
    </div>
  );
}

export default BookingCard;

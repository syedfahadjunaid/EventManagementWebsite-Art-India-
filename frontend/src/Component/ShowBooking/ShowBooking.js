import React from "react";
import "./ShowBooking.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
import BookingCard from "../Layout/BookingCard/BookingCard";
import AvaliableShowTable from "../AvaliableShowTable/AvaliableShowTable";

import {
  // useCreateEventMutation,
  useGetEventsQuery,
  // useGetOneEventByIdQuery,
  // useUpdateEventByIdMutation,
} from "../../services/events";

import {
  // useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "../../services/venues";

import // updateFilterEvent,
// updateFilterEventDate,
// updateFilterEventVenue,
// updateFilterEventCategory,
"../../slice/FilterEventSlice";

import { useSelector } from "react-redux";

function ShowBooking() {
  const { eventDate, eventVenue, eventCategory } = useSelector(
    (state) => state.filterEventState
  );

  // const dispatch = useDispatch();

  // console.log(filterEvent);
  // console.log(eventDate);
  // console.log(eventVenue);
  // console.log(eventCategory);

  const responseGetEvents = useGetEventsQuery();
  const responseGetVenues = useGetVenuesQuery();

  // console.log(responseGetEvents);
  // const fileterflkdfs = responseGetEvents?.data?.map((hsd) => {
  //   const filteredDate = hsd?.eventDates?.filter((dates) => {
  //     return eventDate === dates.date.substr(0, 10);
  //   });
  //   console.log(filteredDate);
  //   if (filteredDate.length >= 1) {
  //     return true;
  //   }
  //   return false;
  // });
  // console.log(fileterflkdfs);

  const filteredEvents = responseGetEvents?.data?.filter((response, index) => {
    if (
      eventCategory !== "All" &&
      eventDate === "" &&
      eventVenue === "All Venues"
    ) {
      return eventCategory === response.EventType;
    } else if (
      eventCategory === "All" &&
      eventDate !== "" &&
      eventVenue === "All Venues"
    ) {
      const filteredDate = response?.eventDates?.filter((dates) => {
        return eventDate === dates.date.substr(0, 10);
      });
      // console.log(filteredDate);
      if (filteredDate.length >= 1) {
        return true;
      }
      return false;
    } else if (
      eventCategory === "All" &&
      eventDate === "" &&
      eventVenue !== "All Venues"
    ) {
      const filteredVenues = responseGetVenues?.data?.filter((venue) => {
        if (response.venueId === venue._id) {
          if (eventVenue === venue.VenuesName) {
            return true;
          }
        }
      });
      // console.log(filteredVenues);
      if (filteredVenues.length >= 1) {
        return true;
      }
      return false;
    } else if (
      eventCategory !== "All" &&
      eventDate !== "" &&
      eventVenue !== "All Venues"
    ) {
    }
    return response;
  });
  // console.log(filteredEvents);

  const sortedFilteredEvents = filteredEvents?.sort((a, b) => {
    let a_date = new Date(a?.updatedAt);
    let b_date = new Date(b?.updatedAt);

    return b_date - a_date;
  });

  // console.log(sortedFilteredEvents);

  const filteredEventCards = sortedFilteredEvents?.filter((response, index) => {
    if (response?.Published === true) {
      return true;
    }
    return false;
  });

  const renderedEventCards = filteredEventCards?.map((response, index) => {
    const venue = responseGetVenues?.data?.find((v) => {
      return v._id === response.venueId;
    });

    return <BookingCard key={index} data={response} venue={venue} />;
  });

  // console.log(renderedEventCards);

  return (
    <>
      {responseGetEvents.isLoading && responseGetVenues.isLoading ? (
        "Loading..."
      ) : (
        <div className='showbooking'>
          <HeadImage />
          <h3>What's On</h3>
          <AvaliableShowTable />
          <div className='showbooking_card'>
            {renderedEventCards}
            {renderedEventCards?.length === 0 && <h3>No Events Available</h3>}

            {/* <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard /> */}
          </div>
          {/* <div className='showbooking_viewMore'>
            <p>View More</p>
            <span></span>
          </div> */}
        </div>
      )}
    </>
  );
}

export default ShowBooking;

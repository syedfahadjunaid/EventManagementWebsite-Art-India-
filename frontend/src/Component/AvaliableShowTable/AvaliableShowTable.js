import React, { useState } from "react";
import "./AvaliableShowTable.css";
import { AccessTime, KeyboardArrowDown } from "@mui/icons-material";

import {
  // useCreateCategoryMutation,
  // useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
  // useGetCategoryByIdQuery,
  // useUpdateCategoryByIdMutation,
  // usePublishCategoriesByIdMutation,
} from "../../services/categories";

import {
  // useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "../../services/venues";

import { useDispatch, useSelector } from "react-redux";

import {
  // updateFilterEvent,
  updateFilterEventDate,
  updateFilterEventVenue,
  updateFilterEventCategory,
} from "../../slice/FilterEventSlice";

// import { useGetEventsQuery } from "../../services/events";

function AvaliableShowTable() {
  const {
    // filterEvent,
    eventDate,
    eventVenue,
    eventCategory,
  } = useSelector((state) => state.filterEventState);
  // const { venues } = useSelector((state) => state.venuesState);

  const dispatch = useDispatch();

  const responseGetCategories = useGetCategoriesQuery();
  const responseGetVenues = useGetVenuesQuery();
  // const responseGetEvents = useGetEventsQuery();
  // console.log(responseGetEvents);

  // const currentDate = new Date().toJSON().slice(0, 10);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  // console.log(currentDate);

  // const [categorySelection, setCategorySelection] = useState("All");
  // const [venuesSelection, setVenuesSelection] = useState("All Venues");
  // const [dateSelection, setDateSelection] = useState("");

  const handleChangeCategory = (response) => {
    // setCategorySelection(response.CategoriesTitle);
    dispatch(updateFilterEventCategory(response.CategoriesTitle));
    dispatch(updateFilterEventVenue("All Venues"));
    dispatch(updateFilterEventDate(""));
  };

  const handleChangeVenue = (response) => {
    // setVenuesSelection(response.VenuesName);
    dispatch(updateFilterEventVenue(response.VenuesName));
    dispatch(updateFilterEventCategory("All"));
    dispatch(updateFilterEventDate(""));
  };

  const handleChangeDate = (response) => {
    // setDateSelection(response.target.value);
    dispatch(updateFilterEventDate(response.target.value));
    dispatch(updateFilterEventVenue("All Venues"));
    dispatch(updateFilterEventCategory("All"));
  };
  // console.log(eventDate);
  // console.log(eventVenue);
  // console.log(eventCategory);

  const renderedCategories = responseGetCategories?.data?.map(
    (response, index) => {
      return (
        <li
          key={index}
          className={
            eventCategory === response.CategoriesTitle ? "dropdown_active" : ""
          }
          onClick={() => handleChangeCategory(response)}>
          {response.CategoriesTitle}
        </li>
      );
    }
  );

  const renderedVenues = responseGetVenues?.data?.map((response, index) => {
    return (
      <li
        key={index}
        className={eventVenue === response.VenuesName ? "dropdown_active" : ""}
        onClick={() => handleChangeVenue(response)}>
        {response.VenuesName}
      </li>
    );
  });

  // --------------------------------------------------------

  const [date, setDate] = useState(false);
  const [all, setAll] = useState(false);
  const [allVenues, setAllVenues] = useState(false);
  // const [browse, setBrowse] = useState(false);
  const handleActive = (e) => {
    // console.log(e.target.textContent);
    if (e.target.textContent === "Venue") {
      setAllVenues(!allVenues);
      setAll(false);
      // setBrowse(false);
      setDate(false);
    }
    if (e.target.textContent === "Category") {
      setAllVenues(false);
      setAll(!all);
      // setBrowse(false);
      setDate(false);
    }
    // if (e.target.textContent === "Browse by ") {
    //   setBrowse(!browse);
    //   setAllVenues(false);
    //   setAll(false);
    //   setDate(false);
    // }
    if (e.target.textContent === "Date & Time ") {
      // setBrowse(false);
      setAllVenues(false);
      setAll(false);
      setDate(!date);
    }
  };
  return (
    <>
      <div className='avaliableshowtable'>
        <div style={{ cursor: "pointer" }}>
          <span onClick={handleActive}>
            <p>Date & Time </p>
            <KeyboardArrowDown
              className={date ? "flip-2-hor-bottom-fwd" : ""}
            />
          </span>
          {date && (
            <div
              className='dropdown2'
              style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <input
                type='date'
                value={eventDate}
                onChange={handleChangeDate}
                min={disablePastDate()}
              />
              <button
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => {
                  // setDateSelection("");
                  dispatch(updateFilterEventDate(""));
                  dispatch(updateFilterEventVenue("All Venues"));
                  dispatch(updateFilterEventCategory("All"));
                }}>
                All Dates
              </button>
              {/* <span>
                <AccessTime />
                <p>00:00 PM</p>
              </span> */}
            </div>
          )}
        </div>

        <div style={{ cursor: "pointer" }}>
          <span onClick={handleActive}>
            <p>Category</p>
            <KeyboardArrowDown className={all ? "flip-2-hor-bottom-fwd" : ""} />
          </span>

          {all && (
            <div className='dropdown'>
              <ul>
                <li
                  className={eventCategory === "All" ? "dropdown_active" : ""}
                  onClick={() => {
                    dispatch(updateFilterEventCategory("All"));
                    dispatch(updateFilterEventDate(""));
                    dispatch(updateFilterEventVenue("All Venues"));
                    // setCategorySelection("All");
                  }}>
                  All
                </li>

                {renderedCategories}
              </ul>
            </div>
          )}
        </div>

        <div style={{ cursor: "pointer" }}>
          <span onClick={handleActive}>
            <p>Venue</p>
            <KeyboardArrowDown
              className={allVenues ? "flip-2-hor-bottom-fwd" : ""}
            />
          </span>
          {allVenues && (
            <div className='dropdown'>
              <ul>
                <li
                  className={
                    eventVenue === "All Venues" ? "dropdown_active" : ""
                  }
                  onClick={() => {
                    dispatch(updateFilterEventVenue("All Venues"));
                    dispatch(updateFilterEventCategory("All"));
                    dispatch(updateFilterEventDate(""));
                    // setVenuesSelection("All Venues");
                  }}>
                  All Venues
                </li>
                {renderedVenues}
              </ul>
            </div>
          )}
        </div>
        {/* <div>
        <span onClick={handleActive}>
          <p>Browse by </p>
          <KeyboardArrowDown />
        </span>
        {browse && (
          <div className="dropdown1">
          <p>Acoustic</p>
          <p>Adaptation</p>
          <p>Anupam Kher</p>
          <p>Apartheid</p>
          <p>Art Exhibition</p>
          <p>Award winning</p>
          <p>Band</p>
          <p>Broadway</p>
          <p>Carnatic Classical</p>
          <p>Carnatic</p>
          <p>Classical Fusion</p>
          <p>Classical Music</p>
          <p>Comedy</p>
          <p>Contemporary</p>
          <p>Contemporary Art</p>
          <p>Contemporary Dance</p>
          <p>Dance</p>
          <p>Drama</p>
          <p>Electronic</p>
          <p>Family</p>
          <p>Fashion</p>
          <p>Feroz Abbas Khan</p>
          <p>Folk Music</p>
          <p>Gandhi</p>
          <p>Gujarati</p>
          <p>Gujarati</p>
          <p>Gujarati Folk</p>
          <p>Hindustani Classical</p>
          <p>India Inspired</p>
          <p>Indian Classical Fusion</p>
          <p>Indian Dance</p>
          <p>Indian Music</p>
          <p>Indian Textiles</p>
          <p>Indie</p>
          <p>Instrumental</p>
          <p>Kaifi Azmi</p>
          <p>Mahatma Gandhi</p>
          <p>Mahesh Elkunchwar</p>
          <p>Mame Khan</p>
          <p>Marathi</p>
          <p>Music</p>
          <p>Musical</p>
          
          </div>
        )}
      </div> */}
      </div>
    </>
  );
}

export default AvaliableShowTable;

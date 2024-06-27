import React, { useEffect } from "react";
import "./AdminEvent.css";
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
  MenuItem,
  Modal,
  Select,
  // Slide,
  Typography,
} from "@mui/material";
import {
  // Delete,
  Edit,
  EventAvailable,
  Search,
} from "@mui/icons-material";
import { useState } from "react";

import {
  useCreateEventMutation,
  useGetEventsQuery,
  // useGetOneEventByIdQuery,
  useUpdateEventByIdMutation,
  useUpdateEventPublishByIdMutation,
} from "../../../services/events";

import {
  // useCreateCategoryMutation,
  // useDeleteCategoryByIdMutation,
  useGetCategoriesQuery,
  // useGetCategoryByIdQuery,
  // useUpdateCategoryByIdMutation,
  // usePublishCategoriesByIdMutation,
} from "../../../services/categories";

import {
  // useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  // useUpdateVenueByIdMutation,
} from "../../../services/venues";

import {
  useCreateEventSeatsMutation,
  // useGetEventSeatsByIdQuery,
  // useGetEventSeatsQuery,
  // useUpdateEventSeatsByIdMutation,
} from "../../../services/eventSeats";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction='up' ref={ref} {...props} />;
// });
function AdminEvent() {
  const responseEvents = useGetEventsQuery();
  const responseGetCategories = useGetCategoriesQuery();
  const responseGetVenues = useGetVenuesQuery();
  const [updateEventPublishById, responseUpdateEventPublishById] =
    useUpdateEventPublishByIdMutation();
  console.log(responseUpdateEventPublishById);

  useEffect(() => {
    if (responseUpdateEventPublishById.isSuccess) {
      responseEvents.refetch();
    }
  }, [responseUpdateEventPublishById.isSuccess]);
  // const responseGetEventSeats = useGetEventSeatsQuery();

  // console.log(responseEvents.data);

  const [createEvent, responseCreateEvent] = useCreateEventMutation();
  const [updateEventById, responseUpdateEventById] =
    useUpdateEventByIdMutation();
  const [
    createEventSeats,
    // responseCreateEventSeats
  ] = useCreateEventSeatsMutation();

  const [EventName, setEventName] = useState();
  const [EventShortdescription, setEventShortdescription] = useState();
  const [EventOrganizer, setEventOrganizer] = useState();
  const [EventType, setEventType] = useState("");
  const [Eventdescription, setEventdescription] = useState();
  const [EventPrice, setEventPrice] = useState();
  const [venueId, setVenueId] = useState("");
  const [EventImage, setEventImage] = useState();

  const [eventId, setEventId] = useState();
  const [numberOfSeats, setNumberOfSeats] = useState(0);

  // Add Event Time And Date
  // const [startTime, setStartTime] = useState();
  // const [endTime, setEndTime] = useState();
  // const [date, setDate] = useState();

  // ---------------------------------------------------------------------

  const [dateFields, setDateFields] = useState([
    { date: "", times: [""] }, // Initial date and time field
  ]);

  const [dateFieldForSeats, setDateFieldForSeats] = useState([
    { date: "", times: [{ time: "", numberOfSets: 0 }] },
  ]);

  const handleDateChange = (index, event) => {
    event.preventDefault();
    const updatedDateFields = [...dateFields];
    updatedDateFields[index].date = event.target.value;
    setDateFields(updatedDateFields);

    // Seats Updation
    const updatedDateAccordingToSeats = [...dateFieldForSeats];
    updatedDateAccordingToSeats[index].date = event.target.value;
    setDateFieldForSeats(updatedDateAccordingToSeats);
  };

  const handleTimeChange = (dateIndex, timeIndex, event) => {
    event.preventDefault();
    const updatedDateFields = [...dateFields];
    updatedDateFields[dateIndex].times[timeIndex] = event.target.value;
    setDateFields(updatedDateFields);

    // Seats Updation
    const updatedDateAccordingToSeats = [...dateFieldForSeats];
    updatedDateAccordingToSeats[dateIndex].times[timeIndex] = {
      time: event.target.value,
      numberOfSets: numberOfSeats,
    };
    setDateFieldForSeats(updatedDateAccordingToSeats);
  };

  const addDateField = (e) => {
    e.preventDefault();
    setDateFields([...dateFields, { date: "", times: [""] }]);

    // Seats Updation
    setDateFieldForSeats([
      ...dateFieldForSeats,
      { date: "", times: [{ time: "", numberOfSets: numberOfSeats }] },
    ]);
  };

  const addTimeField = (e, dateIndex) => {
    e.preventDefault();
    const updatedDateFields = [...dateFields];
    updatedDateFields[dateIndex].times.push("");
    setDateFields(updatedDateFields);

    // Seats Updation
    const updatedDateAccordingToSeats = [...dateFieldForSeats];
    updatedDateAccordingToSeats[dateIndex].times.push({
      time: "",
      numberOfSets: numberOfSeats,
    });
    setDateFieldForSeats(updatedDateAccordingToSeats);
  };

  const removeDateField = (e) => {
    e.preventDefault();
    if (dateFields.length > 1) {
      dateFields.splice(-1, 1);
      setDateFields(() => {
        return [...dateFields];
      });
    }
  };

  const removeDateFieldForSeats = (e) => {
    e.preventDefault();
    if (dateFieldForSeats.length > 1) {
      dateFieldForSeats.splice(-1, 1);
      setDateFieldForSeats(() => {
        return [...dateFieldForSeats];
      });
    }
  };

  const removeTimeField = (e, dateIndex) => {
    e.preventDefault();
    const updatedDateFields = [...dateFields];
    if (updatedDateFields[dateIndex].times.length > 1) {
      updatedDateFields[dateIndex].times.splice(-1, 1);
      setDateFields(() => {
        return [...updatedDateFields];
      });
    }
  };

  const removeTimeFieldForSeats = (e, dateIndex) => {
    e.preventDefault();
    const updatedDateFields = [...dateFieldForSeats];
    if (updatedDateFields[dateIndex].times.length > 1) {
      updatedDateFields[dateIndex].times.splice(-1, 1);
      setDateFieldForSeats(() => {
        return [...updatedDateFields];
      });
    }
  };

  // console.log(dateFields);

  //----------------------------------------------------------------------------------

  const [venueNameADD, setVenueNameADD] = useState("");
  const [venueNameUpdate, setVenueNameUpdate] = useState("");

  // // Update Event Time And Date
  // const [updateStartTime, setUpdateStartTime] = useState();
  // const [updateEndTime, setUpdateEndTime] = useState();
  // const [updateStartDate, setUpdateStartDate] = useState();
  // const [updateEndDate, setUpdateEndDate] = useState();

  // Update Event Dropdowns
  const [updateEventType, setUpdateEventType] = useState("");

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
    height: "550px",
    overflowY: "scroll",
    borderRadius: "5px",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const [search, setSearch] = useState("");

  const filteredData = responseEvents?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data.EventName.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedEvents = filteredData.map((response, index) => {
    return (
      <tr key={index} onClick={() => handleUpdateSet(response)}>
        <td>{index + 1}</td>
        <td style={{ width: "250px" }}>{response.EventName}</td>
        <td>{response.EventType}</td>
        <td style={{ display: "flex", flexDirection: "column" }}>
          {response.eventDates.map((dates, index) => {
            return (
              <div
                key={index}
                className=''
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid black",
                }}>
                <p>{`Date - ${dates.date.substr(0, 10)}`}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    // padding: "10px",
                  }}>
                  {dates.times.map((time, index) => {
                    return <p key={index}>{`Time - ${time.time}`}</p>;
                  })}
                  <p></p>
                </div>
              </div>
            );
          })}
        </td>

        <td>
          <label className='switch'>
            <input
              type='checkbox'
              checked={response.Published}
              onChange={(e) => {
                const publishData = {
                  eventId: response?._id,
                  publishStatus: {
                    published: e.target.checked,
                  },
                };
                updateEventPublishById(publishData);
              }}
            />
            <span className='slider round'></span>
          </label>
        </td>
        <td>
          <Edit
            style={{
              color: "#6E798C",
              marginLeft: "5px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={handleOpen1}
          />
          {/* <Delete
            style={{
              color: "#6E798C",
              marginLeft: "5px",
              marginRight: "5px",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
          /> */}
        </td>
      </tr>
    );
  });

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  // const [age, setAge] = React.useState("");

  // const handleChange = (event) => {
  //   setEventType(event.target.value);
  // };

  const handleVenueChange = (response) => {
    setVenueId(response._id);
    setNumberOfSeats(response.VenueSeats);
  };

  // const [reponseEventData, setResponseEventData] = useState([]);
  // const [reponseOfEventsSeats, setReponseOfEventsSeats] = useState(false);

  useEffect(() => {
    responseEvents.refetch();
    responseGetCategories.refetch();
    responseGetVenues.refetch();
    if (responseCreateEvent.isSuccess === true) {
      // const eventIdForSeats = responseEvents?.data?.find(
      //   (data, index) => index === responseEvents?.data?.length - 1 && data
      // );

      const eventSeatsData = {
        EventId: responseCreateEvent?.data?._id,
        eventDates: dateFieldForSeats,
      };
      // console.log(eventSeatsData);

      createEventSeats(eventSeatsData);
      setDateFieldForSeats([
        { date: "", times: [{ time: "", numberOfSets: 0 }] },
      ]);
      // eventSeatCreation();
    }
  }, [responseCreateEvent.isSuccess, responseUpdateEventById.isSuccess]);

  const handleAddEvent = (e) => {
    e.preventDefault();

    // const timings = arr.map((time) => {
    //   return time.value;
    // });

    // console.log(timings);

    const formData = new FormData();

    formData.append("EventName", EventName);
    formData.append("EventShortdescription", EventShortdescription);
    formData.append("EventOrganizer", EventOrganizer);
    formData.append("EventType", EventType);
    formData.append("venueId", venueId);
    formData.append("Eventdescription", Eventdescription);
    formData.append("EventPrice", EventPrice);
    formData.append("EventImage", EventImage);
    formData.append("eventDates", JSON.stringify(dateFields));

    // console.log(formData);
    createEvent(formData);

    responseEvents.refetch();
    // setTimeout(() => {
    //   eventSeatCreation();
    // }, [2000]);
    setDateFields([{ date: "", times: [""] }]);
    handleClose();
  };

  const handleUpdateSet = (updateResponse) => {
    setEventId(updateResponse._id);
    setEventName(updateResponse.EventName);
    setEventOrganizer(updateResponse.EventOrganizer);
    setEventPrice(updateResponse.EventPrice);
    setEventShortdescription(updateResponse.EventShortdescription);
    setEventdescription(updateResponse.Eventdescription);
    setUpdateEventType(updateResponse.EventType);
    const venue = responseGetVenues?.data?.find((venue) => {
      return venue._id === updateResponse.venueId;
    });
    setVenueNameUpdate(venue.VenuesName);
    setVenueId(updateResponse.venueId);
    // setDateFields(updateResponse.eventDates);
    // console.log(dateFields);
  };

  const handleUpdateEvent = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("EventName", EventName);
    formData.append("EventShortdescription", EventShortdescription);
    formData.append("EventOrganizer", EventOrganizer);
    formData.append("EventType", updateEventType);
    formData.append("venueId", venueId);
    formData.append("Eventdescription", Eventdescription);
    formData.append("EventPrice", EventPrice);
    formData.append("EventImage", EventImage);
    formData.append("eventDates", JSON.stringify(dateFields));

    const submitData = {
      id: eventId,
      updateData: formData,
    };

    console.log(formData);
    updateEventById(submitData);
    setDateFields([{ date: "", times: [""] }]);
    handleClose1();
  };

  // console.log(dateFieldForSeats);

  return (
    <>
      {responseEvents.isLoading &&
      responseGetCategories.isLoading &&
      responseGetVenues.isLoading ? (
        "Loading..."
      ) : (
        <div className='adminorderpage'>
          <div className='adminorderpage_heading'>
            <EventAvailable
              className='adminsidebar_icon'
              style={{ fontSize: "35px" }}
            />
            <p>All Events</p>
          </div>
          <div className='adminorderpage_table'>
            <div className='adminorderpage_table_head allbrand_table_head'>
              <span>
                {/* <p>#ID</p> */}
                <input
                  type='text'
                  placeholder='Search by event name'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Search />
              </span>
              <button className='addbutton' onClick={handleOpen}>
                Add Events
              </button>
            </div>
            <div className='adminorderpage_table_table'>
              {filteredData.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th style={{ width: "250px" }}>Events </th>
                      <th>Category Name</th>
                      <th>Time/date</th>
                      <th>Published</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                    <td>1</td>
                    <td style={{ width: "250px" }}>
                      Rambutan Sweet Delicious Fruit
                    </td>
                    <td>Event Name </td>
                    <td>7pm - 19/6</td>
                    <td>
                      <label className='switch'>
                        <input type='checkbox' />
                        <span className='slider round'></span>
                      </label>
                    </td>
                    <td>
                      <Edit
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen1}
                      />
                      <Delete
                        style={{
                          color: "#6E798C",
                          marginLeft: "5px",
                          marginRight: "5px",
                          cursor: "pointer",
                        }}
                        onClick={handleClickOpen}
                      />
                    </td>
                  </tr> */}
                    {renderedEvents.reverse()}
                  </tbody>
                </table>
              ) : (
                <p style={{ fontSize: "30px" }}>No Data Found</p>
              )}
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
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Create Event
                </Typography>
                <form className='modal_form' onSubmit={handleAddEvent}>
                  <span>
                    <input
                      type='text'
                      placeholder='Event Title'
                      onChange={(e) => setEventName(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <input
                      type='text'
                      placeholder='Organizer'
                      onChange={(e) => setEventOrganizer(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <Select
                      value={EventType}
                      onChange={(e) => setEventType(e.target.value)}
                      displayEmpty
                      style={{ width: "100%" }}>
                      <MenuItem value=''>
                        <em style={{ color: "#767676" }}>
                          Select Event Type (Default None)
                        </em>
                      </MenuItem>
                      {responseGetCategories?.data?.map((response, index) => {
                        return (
                          <MenuItem
                            key={index}
                            value={response.CategoriesTitle}>
                            {response.CategoriesTitle}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </span>
                  <span>
                    {/* <input type='text' placeholder='Venue' /> */}
                    <Select
                      value={venueNameADD}
                      onChange={(e) => setVenueNameADD(e.target.value)}
                      displayEmpty
                      style={{ width: "100%" }}>
                      <MenuItem value=''>
                        <em style={{ color: "#767676" }}>
                          Select Venue (Default None)
                        </em>
                      </MenuItem>
                      {responseGetVenues?.data?.map((response, index) => {
                        return (
                          <MenuItem
                            key={index}
                            onClick={() => {
                              handleVenueChange(response);
                            }}
                            value={response.VenuesName}>
                            {response.VenuesName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </span>
                  <span>
                    <input
                      type='number'
                      placeholder='Price'
                      onChange={(e) => setEventPrice(e.target.value)}
                      required
                      onWheel={(e) => e.target.blur()}
                    />
                  </span>

                  <p className='modal_form_para'>Date & Time</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: "10px",
                      width: "100%",
                    }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1rem",
                        width: "100%",
                      }}>
                      {dateFields.map((dateField, dateIndex) => (
                        <div
                          key={dateIndex}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}>
                          <input
                            type='date'
                            value={dateField.date}
                            required
                            onChange={(event) =>
                              handleDateChange(dateIndex, event)
                            }
                          />

                          {dateField.times.map((time, timeIndex) => (
                            <input
                              key={timeIndex}
                              type='time'
                              value={time}
                              required
                              style={{ padding: "10px" }}
                              onChange={(event) =>
                                handleTimeChange(dateIndex, timeIndex, event)
                              }
                            />
                          ))}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "1rem",
                              justifyContent: "start",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}>
                            <button
                              onClick={(e) => addTimeField(e, dateIndex)}
                              style={{
                                padding: "6px",
                                backgroundColor: "white",
                              }}>
                              Add New Time
                            </button>
                            <button
                              onClick={(e) => {
                                removeTimeField(e, dateIndex);
                                removeTimeFieldForSeats(e, dateIndex);
                              }}
                              style={{
                                padding: "6px",
                                backgroundColor: "red",
                                color: "white",
                              }}>
                              Remove Time
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        gap: "1rem",
                        width: "100%",
                      }}>
                      <button
                        onClick={addDateField}
                        style={{ padding: "6px", backgroundColor: "white" }}>
                        Add New Date & Time
                      </button>
                      <button
                        onClick={() => {
                          removeDateField();
                          removeDateFieldForSeats();
                        }}
                        style={{
                          padding: "6px",
                          backgroundColor: "red",
                          color: "white",
                        }}>
                        Remove Date & Time
                      </button>
                    </div>
                  </div>

                  <div></div>
                  <p className='modal_form_para'>Short Description</p>
                  <span>
                    <textarea
                      rows={5}
                      onChange={(e) => setEventShortdescription(e.target.value)}
                      required
                    />
                  </span>
                  <p className='modal_form_para'>Description</p>
                  <span>
                    <textarea
                      rows={5}
                      onChange={(e) => setEventdescription(e.target.value)}
                      required
                    />
                  </span>
                  <p className='modal_form_para'>Images</p>

                  <input
                    type='file'
                    accept='image/png, image/jpeg'
                    required
                    onChange={(e) => setEventImage(e.target.files[0])}
                  />
                  <button className='modal_form_buttom'>Add Event</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open1}
            onClose={handleClose1}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}>
            <Fade in={open1}>
              <Box sx={style}>
                <Typography
                  id='transition-modal-title'
                  variant='h6'
                  component='h2'>
                  Update Event
                </Typography>
                {/* <form className='modal_form' onSubmit={handleUpdateEvent}>
                  <span>
                    <input type='text' placeholder='Event Title' />
                  </span>
                  <span>
                    <input type='text' placeholder='Organizer' />
                  </span>
                  <span>
                    <Select
                      value={""}
                      onChange={""}
                      displayEmpty
                      style={{ width: "100%" }}>
                      <MenuItem value=''>
                        <em style={{ color: "#767676" }}>
                          Select Event Type (Default None)
                        </em>
                      </MenuItem>
                      {responseGetCategories?.data?.map((response, index) => {
                        return (
                          <MenuItem
                            key={index}
                            value={response.CategoriesTitle}>
                            {response.CategoriesTitle}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </span>
                  <span>
                    <input type='text' placeholder='Venue' />
                  </span>
                  <span>
                    <input type='text' placeholder='Location' />
                  </span>

                  <p className='modal_form_para'>Time</p>
                  <div>
                    <span>
                      <input type='time' />
                    </span>
                    <span>
                      <input type='time' />
                    </span>
                  </div>
                  <p className='modal_form_para'>Date</p>
                  <div>
                    <span>
                      <input type='date' />
                    </span>
                    <span>
                      <input type='date' />
                    </span>
                  </div>
                  <p className='modal_form_para'>Short Description</p>
                  <span>
                    <textarea rows={5} />
                  </span>
                  <p className='modal_form_para'>Description</p>
                  <span>
                    <textarea rows={5} />
                  </span>
                  <p className='modal_form_para'>Images</p>

                  <input type='file' />
                  <button className='modal_form_buttom'>Update Event</button>
                </form> */}
                <form className='modal_form' onSubmit={handleUpdateEvent}>
                  <span>
                    <input
                      type='text'
                      placeholder='Event Title'
                      value={EventName}
                      onChange={(e) => setEventName(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <input
                      type='text'
                      placeholder='Organizer'
                      value={EventOrganizer}
                      onChange={(e) => setEventOrganizer(e.target.value)}
                      required
                    />
                  </span>
                  <span>
                    <Select
                      value={updateEventType}
                      onChange={(e) => setUpdateEventType(e.target.value)}
                      displayEmpty
                      style={{ width: "100%" }}>
                      <MenuItem value=''>
                        <em style={{ color: "#767676" }}>
                          Select Event Type (Default None)
                        </em>
                      </MenuItem>
                      {responseGetCategories?.data?.map((response, index) => {
                        return (
                          <MenuItem
                            key={index}
                            value={response.CategoriesTitle}>
                            {response.CategoriesTitle}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </span>
                  <span>
                    {/* <input type='text' placeholder='Venue' /> */}
                    <Select
                      value={venueNameUpdate}
                      onChange={(e) => setVenueNameUpdate(e.target.value)}
                      displayEmpty
                      style={{ width: "100%" }}>
                      <MenuItem value=''>
                        <em style={{ color: "#767676" }}>
                          Select Venue (Default None)
                        </em>
                      </MenuItem>
                      {responseGetVenues?.data?.map((response, index) => {
                        return (
                          <MenuItem
                            key={index}
                            onClick={() => setVenueId(response._id)}
                            value={response.VenuesName}>
                            {response.VenuesName}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </span>
                  <span>
                    <input
                      type='number'
                      placeholder='Price'
                      value={EventPrice}
                      onChange={(e) => setEventPrice(e.target.value)}
                      required
                      onWheel={(e) => e.target.blur()}
                    />
                  </span>

                  <p className='modal_form_para'>Date & Time</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      gap: "10px",
                      width: "100%",
                    }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1rem",
                        width: "100%",
                      }}>
                      {dateFields.map((dateField, dateIndex) => (
                        <div
                          key={dateIndex}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}>
                          <input
                            type='date'
                            value={dateField.date}
                            required
                            onChange={(event) =>
                              handleDateChange(dateIndex, event)
                            }
                          />

                          {dateField.times.map((time, timeIndex) => (
                            <input
                              key={timeIndex}
                              type='time'
                              value={time}
                              required
                              style={{ padding: "10px" }}
                              onChange={(event) =>
                                handleTimeChange(dateIndex, timeIndex, event)
                              }
                            />
                          ))}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              gap: "1rem",
                              justifyContent: "start",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}>
                            <button
                              onClick={(e) => addTimeField(e, dateIndex)}
                              style={{
                                padding: "6px",
                                backgroundColor: "white",
                              }}>
                              Add New Time
                            </button>
                            <button
                              onClick={(e) => removeTimeField(e, dateIndex)}
                              style={{
                                padding: "6px",
                                backgroundColor: "red",
                                color: "white",
                              }}>
                              Remove Time
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "end",
                        gap: "1rem",
                        width: "100%",
                      }}>
                      <button
                        onClick={addDateField}
                        style={{ padding: "6px", backgroundColor: "white" }}>
                        Add New Date & Time
                      </button>
                      <button
                        onClick={removeDateField}
                        style={{
                          padding: "6px",
                          backgroundColor: "red",
                          color: "white",
                        }}>
                        Remove Date & Time
                      </button>
                    </div>
                  </div>

                  <div></div>
                  <p className='modal_form_para'>Short Description</p>
                  <span>
                    <textarea
                      rows={5}
                      onChange={(e) => setEventShortdescription(e.target.value)}
                      required
                      value={EventShortdescription}
                    />
                  </span>
                  <p className='modal_form_para'>Description</p>
                  <span>
                    <textarea
                      rows={5}
                      onChange={(e) => setEventdescription(e.target.value)}
                      required
                      value={Eventdescription}
                    />
                  </span>
                  <p className='modal_form_para'>Images</p>

                  <input
                    type='file'
                    accept='image/png, image/jpeg'
                    required
                    onChange={(e) => setEventImage(e.target.files[0])}
                  />
                  <button className='modal_form_buttom'>Update Event</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          {/* <Dialog
            open={open2}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-describedby='alert-dialog-slide-description'>
            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-slide-description'>
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2}>Disagree</Button>
              <Button onClick={handleClose2}>Agree</Button>
            </DialogActions>
          </Dialog> */}
        </div>
      )}
    </>
  );
}

export default AdminEvent;

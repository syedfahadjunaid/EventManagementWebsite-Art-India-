import React, { forwardRef, useState, useEffect } from "react";
import "./AdminFAQ.css";
import {
  Backdrop,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  List,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import { Delete, Edit, Search } from "@mui/icons-material";
// import JoditEditor from "jodit-react";

// import {
//   useGetBlogsQuery,
//   useGetBlogByIdQuery,
//   useCreateBlogMutation,
//   useUpdateBlogByIdMutation,
//   useDeleteBlogByIdMutation,
// } from "../../../services/blog";

import {
  useCreateVenueMutation,
  // useGetOneVenueByIdQuery,
  useGetVenuesQuery,
  useUpdateVenueByIdMutation,
} from "../../../services/venues";

import {
  useGetFAQsQuery,
  useCreateFAQMutation,
  useDeleteFAQByIdMutation,
  useUpdateFAQByIdMutation,
} from "../../../services/faq";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function AdminFAQ() {
  const responseGetAllFAQ = useGetFAQsQuery();

  //   console.log(responseGetAllFAQ);
  // console.log(responseGetAllVenues);

  const [createFAQ, responsecreateFAQ] = useCreateFAQMutation();
  const [updateFAQById, responseUpdateFAQById] = useUpdateFAQByIdMutation();
  const [deleteFAQById, responseDeleteFAQById] = useDeleteFAQByIdMutation();

  console.log(responseUpdateFAQById);

  useEffect(() => {
    responseGetAllFAQ.refetch();
  }, [
    responsecreateFAQ.isSuccess,
    responseUpdateFAQById.isSuccess,
    responseDeleteFAQById.isSuccess,
  ]);

  const [FAQId, setFAQId] = useState();

  const [FAQQuestion, setFAQQuestion] = useState();
  const [FAQAnswer, setFAQAnswer] = useState();
  const [updateFAQQuestion, setUpdateFAQQuestion] = useState();
  const [UpdateFAQAnswer, setUpdateFAQAnswer] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    outline: "0",
    height: "550px",
    overflowY: "scroll",
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleCreateVenue = (e) => {
    e.preventDefault();

    const faqData = {
      ques: FAQQuestion,
      ans: FAQAnswer,
    };
    createFAQ(faqData);
    handleClose();
  };

  const handleUpdateVenue = (e) => {
    e.preventDefault();

    const faqData = {
      id: FAQId,
      updateData: {
        ques: updateFAQQuestion,
        ans: UpdateFAQAnswer,
      },
    };
    updateFAQById(faqData);
    handleClose1();
  };

  const handleDeleteById = () => {
    deleteFAQById(FAQId);
    setOpen2(false);
  };

  const [search, setSearch] = useState("");

  const filteredData = responseGetAllFAQ?.data?.filter((data) => {
    if (search !== "") {
      const searchItems = data?.question?.toLowerCase();
      const searchTerm = search.toLowerCase();
      return searchItems.startsWith(searchTerm);
    }
    return data;
  });

  const renderedTable = filteredData?.map((mappedData, index) => {
    return (
      <tr
        key={index}
        onClick={() => {
          setUpdateFAQQuestion(mappedData?.question);
          setUpdateFAQAnswer(mappedData?.answer);
          setFAQId(mappedData?._id);
        }}>
        <td>{index + 1}</td>
        <td style={{ width: "200px" }}>{mappedData.faqID}</td>
        {/* <td>
            <img
              className=''
              style={{ width: "80px", height: "80px" }}
              src={`${process.env.React_App_Base_Image_Url}${mappedData.blogImage}`}
              alt=''
            />
          </td> */}
        <td>{mappedData.question}</td>
        <td>{mappedData.answer}</td>

        {/* <td>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider round'></span>
            </label>
          </td> */}
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
      </tr>
    );
  });
  return (
    <>
      {responseGetAllFAQ.isLoading ? (
        "Loading..."
      ) : (
        <div className='adminorderpage'>
          <div className='adminorderpage_heading'>
            <List className='adminsidebar_icon' style={{ fontSize: "35px" }} />
            <p>FAQ</p>
          </div>
          <div className='adminorderpage_table'>
            <div className='adminorderpage_table_head allbrand_table_head'>
              <span>
                {/* <p>#ID</p> */}
                <input
                  type='text'
                  placeholder='Search by question'
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Search />
              </span>
              <button className='addbutton' onClick={handleOpen}>
                Add FAQ
              </button>
            </div>
            <div className='adminorderpage_table_table'>
              {filteredData.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>S/N</th>

                      <th>FAQ ID</th>
                      {/* <th style={{ width: "250px" }}>IMG</th> */}
                      <th>Question</th>
                      {/* <th>Published</th> */}
                      <th>Answer</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                  <td>1</td>
                  <td style={{ width: "250px" }}>Nemesis</td>
                  <td>Nemesis</td>
                  <td>Nemesis</td>
  
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
                    {renderedTable.reverse()}
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
                  Create FAQ
                </Typography>
                <form className='modal_form' onSubmit={handleCreateVenue}>
                  <p>FAQ Question</p>
                  <span>
                    <textarea
                      type='text'
                      required
                      placeholder='Question'
                      rows={5}
                      onChange={(e) => setFAQQuestion(e.target.value)}
                    />
                  </span>

                  <p>FAQ Answer</p>
                  <span>
                    <textarea
                      type='text'
                      required
                      placeholder='Answer'
                      rows={5}
                      onChange={(e) => setFAQAnswer(e.target.value)}
                      //   onWheel={(e) => e.target.blur()}
                    />
                  </span>

                  <button className='modal_form_buttom'>Add FAQ</button>
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
                  Update FAQ
                </Typography>
                <form className='modal_form' onSubmit={handleUpdateVenue}>
                  <p>FAQ Question</p>
                  <span>
                    <textarea
                      type='text'
                      required
                      placeholder='Question'
                      rows={5}
                      value={updateFAQQuestion}
                      onChange={(e) => setUpdateFAQQuestion(e.target.value)}
                    />
                  </span>

                  <p>FAQ Answer</p>
                  <span>
                    <textarea
                      type='text'
                      required
                      placeholder='Answer'
                      rows={5}
                      value={UpdateFAQAnswer}
                      onChange={(e) => setUpdateFAQAnswer(e.target.value)}
                      //   onWheel={(e) => e.target.blur()}
                    />
                  </span>

                  <button className='modal_form_buttom'>Update FAQ</button>
                </form>
              </Box>
            </Fade>
          </Modal>
          <Dialog
            open={open2}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose2}
            aria-describedby='alert-dialog-slide-description'>
            <DialogTitle>{`Delete`}</DialogTitle>
            <DialogContent>
              <DialogContentText id='alert-dialog-slide-description'>
                Are you sure you want to delete this?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2}>Disagree</Button>
              <Button onClick={handleDeleteById}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
}

export default AdminFAQ;

import React, { useState, useEffect } from "react";
import "./ContactUsPage.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
import img from "../imges/Rectangle 99.png";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import { useForm, Controller } from "react-hook-form";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import NavBar from "../Layout/NavBar/NavBar";

import "./phoneInputStyle.css";

import {
  useCreateContactMutation,
  // useDeleteContactByIdMutation,
  // useGetContactsQuery,
  // useGetOneContactByIdQuery,
  // useUpdateContactByIdMutation,
} from "../../services/contact";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

// import "react-phone-number-input/style.css";

function ContactUsPage() {
  // const responseGetContacts = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();
  // console.log(responseGetContacts);

  // const [contactName, setContactName] = useState();
  // const [contactEmail, setContactEmail] = useState();
  const [contactPhoneNumber, setContactPhoneNumber] = useState();
  // const [contactMessage, setContactMessage] = useState();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #fff",
    outline: "0",
    boxShadow: 24,
    p: 4,
    borderRadius: "6px",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    control,
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    }
  }, [errors, isSubmitSuccessful, reset]);
  const onSubmit = (data) => {
    const submitData = {
      contactName: data.name,
      contactEmail: data.email,
      contactPhoneNumber: data.contact,
      contactMessage: data.message,
    };
    // console.log(submitData);
    handleOpen();

    createContact(submitData);
  };
  return (
    <>
      <NavBar />
      <div className='contactuspage'>
        <div className='contactuspage_banner'></div>
        <div className='contactuspage_form'>
          <HeadImage />
          <h3>We Would Love to Hear From You.</h3>
          <p>
            If you have a query or would like to collaborate with us, share your
            details in the form below.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='contactuspage_form_form_div'>
              <div className='contactuspage_form_form_div_div'>
                <span className='contactuspage_form_form_div_div_span margin_bottom'>
                  <input
                    type='text'
                    required
                    placeholder='Name'
                    {...register("name", {
                      required: true,
                      message: "Enter Valid Name",
                    })}
                    className='contactuspage_form_form_div_div_span_input'
                  />
                </span>
                {errors?.name && (
                  <p className='error_message'>Name is Required</p>
                )}
              </div>
              <div className='contactuspage_form_form_div_div'>
                <span className='contactuspage_form_form_div_div_span margin_bottom'>
                  <input
                    type='email'
                    required
                    className='contactuspage_form_form_div_div_span_input'
                    placeholder='Email'
                    {...register("email", {
                      required: "Email is required",
                      validate: {
                        maxLength: (v) =>
                          v.length <= 50 ||
                          "The email should have at most 50 characters",
                        matchPattern: (v) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            v
                          ) || "Email address must be a valid address",
                      },
                    })}
                  />
                </span>
                {errors?.email && (
                  <p className='error_message'>{errors?.email?.message}</p>
                )}
              </div>

              {/* <span>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
            </span>

            <span>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 ||
                        "The email should have at most 50 characters",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
              </div>

              <p> fdfd</p>
            </span> */}
            </div>
            <div className='contactuspage_form_form_div'>
              <div className='contactuspage_form_form_div_div'>
                {/* <span className='contactuspage_form_form_div_div_span '>
                  <p className='contactuspage_form_form_div_div_span_para'>
                    +91
                  </p>
                  <input
                    type='text'
                    placeholder='Contact No'
                    className='contactuspage_form_form_div_div_span_input_mobile'
                    {...register("contact", {
                      required: true,
                      validate: true,
                      message: "required",
                      minLength: {
                        value: 10,
                        message: "Enter Atlest 10 Number",
                      },
                      maxLength: {
                        value: 13,
                        message: "Enter Valid  Number",
                      },
                    })}
                  />
                  
                </span> */}
                <Controller
                  name='contact'
                  control={control}
                  rules={{
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      value={value}
                      onChange={onChange}
                      defaultCountry='IN'
                      id='phone-input'
                      required
                      // maxLength={13}
                      placeholder='Enter your phone number'
                    />
                  )}
                />
                {errors?.contact && (
                  <p className='error_message'>{errors?.contact?.message}</p>
                )}
              </div>

              <input
                type='text'
                placeholder='Name'
                style={{ visibility: "hidden" }}
              />
            </div>
            <div className='contactuspage_form_form_div_textarea'>
              <textarea
                required
                className='contactuspage_form_form_div_textarea'
                placeholder='Please write your Question or comment in the space provided'
                {...register("message", { required: true })}
              />
              {errors?.message && (
                <p className='error_message'>Message Required</p>
              )}
            </div>
            <span>
              <button type='submit'>Submit</button>
            </span>
          </form>
        </div>
        <div className='contactuspage_address'>
          {/* <img src={img} alt='map' /> */}
          {/* <span>
            <p>G Block,Bandra Kurla Complex,</p>
            <p>Mumbai 400 098,Maharashtra India Telephone: 022 –</p>
            <p>( between 9am – 10pm)Box Office: 022 –</p>
            <p>( between 10am – 10pm)Email: @nmacc.com</p>
          </span> */}
        </div>
        <NewsLetter />
        <Footer />
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
                Thanks You
              </Typography>
              <Typography
                id='transition-modal-description'
                component='p'
                sx={{ mt: 2 }}>
                We Will Get In Touch With You Soon!.
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
}

export default ContactUsPage;

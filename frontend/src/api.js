// import {
//   useGetBlogsQuery,
//   useGetBlogByIdQuery,
//   useCreateBlogMutation,
//   useUpdateBlogByIdMutation,
//   useDeleteBlogByIdMutation,
// } from "./services/blog";
// import {
//   useGetAllAdminsQuery,
//   useDeleteAdminByIdMutation,
//   useCreateAdminMutation,
// } from "./services/admin";

// // import React from 'react'

// export default function Api() {
//   return {
//     useGetBlogsQuery,
//     useGetBlogByIdQuery,
//     useCreateBlogMutation,
//     useUpdateBlogByIdMutation,
//     useDeleteBlogByIdMutation,
//     useGetAllAdminsQuery,
//     useDeleteAdminByIdMutation,
//     useCreateAdminMutation,
//   };
// }

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// console.log(process.env.React_App_Base_Url);
// import {
//   updateAdminName,
//   updateAdminEmail,
//   updateAdminPassword,
// } from "./slice/adminSlice";

// const responseCreateAdmin = useCreateAdminMutation();
// const responseUpdateAdmin = useGetAllAdminsQuery();

// const responseGetAllBlogs = useGetBlogsQuery();
// const responseGetBlogById = useGetBlogByIdQuery("650c2a0dca9fbc31f0256dcd");

// console.log(responseGetBlogById);

// const responseDeleteAdminById = useDeleteAdminByIdMutation();

// const [deleteAdmin, responseInfo] = useDeleteAdminByIdMutation();

// console.log(deleteAdmin);
// console.log(responseInfo);

// console.log(responseDeleteAdminById);

// const { adminName, adminEmail, adminPassword } = useSelector(
//   (state) => state.adminState
// );

// console.log({
//   adminName,
//   adminEmail,
//   adminPassword,
// });
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(updateAdminName("Hello World"));
//   dispatch(updateAdminEmail("hello@gvjsgdc.com"));
//   dispatch(updateAdminPassword("Hello Password"));
// });

// const responseCreationAdmin = useCreateAdminMutation();

// const [createAdmin, responseInfo] = useCreateAdminMutation();
// console.log(createAdmin);
// console.log(responseInfo);

// const [adminProfilePicture, setAdminProfilePicture] = useState([]);

// console.log(adminProfilePicture);

// const data = {
//   adminName: "Fahad 2",
//   adminEmail: "examplemail1222@email.com",
//   adminPassword: "qwerty",
//   adminProfilePicture: adminProfilePicture,
// };

// const formData = new FormData();

// formData.append("adminName", data.adminName);
// formData.append("adminEmail", data.adminEmail);
// formData.append("adminPassword", data.adminPassword);
// formData.append("adminProfilePicture", adminProfilePicture[0]);

// console.log(formData);

// {/* <button onClick={() => createAdmin(formData)}>Delete</button>
//           <input
//             type='file'
//             onChange={(e) => setAdminProfilePicture(e.target.files)}
//           /> */}

// {
//     "EventId": "123",
//     "EventName": "Concert",
//     "EventShortdescription": "Short description",
//     "Eventdescription": "Full description",
//     "EventPrice": 20.99,
//     "EventImage": ["image1.jpg", "image2.jpg"],
//     "venueId":"65212d0c7ea46e0ec2c941bf",
//     "eventDates": [
//     {
//     "date": "2023-01-01",
//     "times": ["2:00pm", "4:00pm"]
//     },
//     {
//     "date": "2023-02-01",
//     "times": ["10:00am", "12:00pm"]
//     }
//     // Add more dates as needed
//     ]
//     }

import React, { useState } from "react";
import "./AdminProfile.css";

import {
  useGetAllAdminsQuery,
  // useDeleteAdminByIdMutation,
  // useCreateAdminMutation,
  useUpdateAdminByIdMutation,
} from "../../../services/admin";

import { useDispatch, useSelector } from "react-redux";
import { updateDataChange } from "../../../slice/dataChangeSlice";

function AdminProfile() {
  const { dataChange } = useSelector((state) => state.dataChangeState);
  const dispatch = useDispatch();

  const responseGetAdmins = useGetAllAdminsQuery();
  const [updateAdminById] = useUpdateAdminByIdMutation();

  const [adminName, setAdminName] = useState();
  const [adminEmail, setAdminEmail] = useState();
  const [adminPassword, setAdminPassword] = useState();
  // const [adminProfilePicture, setAdminProfilePicture] = useState();
  // console.log(createAdmin);
  // console.log(responseInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", adminName);
    formData.append("email", adminEmail);
    formData.append("password", adminPassword);
    formData.append("profileImage", []);

    const submitData = {
      id: responseGetAdmins?.data[0]?._id,
      updateData: formData,
    };
    // console.log(submitData)
    dispatch(updateDataChange(!dataChange));
    updateAdminById(submitData);
    responseGetAdmins.refetch();

    setAdminEmail("");
    setAdminName("");
    setAdminPassword("");
  };
  return (
    <div className='adminprofilepage'>
      <div className='adminprofilepage_heading'>
        <p>Update Profile</p>
      </div>
      <div className='adminprofilepage_details'>
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <span>
            <input
              type='text'
              required
              placeholder='Name'
              value={adminName}
              onChange={(e) => setAdminName(e.target.value)}
            />
          </span>
          <p>Email or Username</p>
          <span>
            <input
              type='email'
              required
              placeholder='Email'
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
          </span>
          {/* <p>Logo</p>

          <input
            type='file'
            required
            accept='image/png, image/jpeg'
            onChange={(e) => setAdminProfilePicture(e.target.files[0])}
          /> */}
          <p>Password</p>
          <span>
            <input
              type='password'
              placeholder='Password'
              required
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </span>
          <button type='submit'>Update Changes</button>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;

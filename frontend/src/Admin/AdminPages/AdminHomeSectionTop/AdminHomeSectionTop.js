import React, { useState } from "react";
import "./AdminHomeSectionTop.css";

// import { Info } from "@mui/icons-material";

import {
  useGetSectionTopDescriptionQuery,
  useUpdateSectionTopDescriptionByIdMutation,
} from "../../../services/sectionTopDescription";

import { useEffect } from "react";

function AdminHomeSectionTop() {
  const responseGetSectionTopDescription = useGetSectionTopDescriptionQuery();
  const [
    updateSectionTopDescriptionById,
    responseUpdateSectionTopDescriptionById,
  ] = useUpdateSectionTopDescriptionByIdMutation();

  const [sectionTopImage, setSectionTopImage] = useState();
  const [sectionTopDescriptionText, setSectionTopDescriptionText] = useState();

  // console.log(responseGetSectionTopDescription);

  const [responseMsgAfterSubmit, setResponseMsgAfterSubmit] = useState("");

  useEffect(() => {
    if (responseUpdateSectionTopDescriptionById.isSuccess === true) {
      setResponseMsgAfterSubmit("Updated Successfully");
    }
  }, [responseUpdateSectionTopDescriptionById.isSuccess]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("sectionTopDescriptionText", sectionTopDescriptionText);
    formData.append("sectionTopImage", sectionTopImage);

    const submitData = {
      id: responseGetSectionTopDescription?.data[0]?._id,
      updateData: formData,
    };
    updateSectionTopDescriptionById(submitData);
  };
  return (
    <div className='adminorderpage'>
      <div className='adminorderpage_heading'>
        <p> Section Top</p>
      </div>
      <div className='adminorderpage_table adminabout'>
        <form className='modal_form' onSubmit={handleUpdate}>
          <p className='modal_form_para'> Image</p>

          <input
            type='file'
            accept='image/png, image/jpeg'
            required
            onChange={(e) => setSectionTopImage(e.target.files[0])}
          />

          <p className='modal_form_para'>Description</p>
          <span>
            <textarea
              rows={8}
              placeholder='Enter text here'
              required
              value={sectionTopDescriptionText}
              onChange={(e) => setSectionTopDescriptionText(e.target.value)}
            />
          </span>

          <div>
            <button className='modal_form_buttom'>Update</button>
            <h3 style={{ color: "green" }}>{responseMsgAfterSubmit}</h3>
          </div>
        </form>
      </div>
      <div className='adminorderpage_pagination'></div>
    </div>
  );
}

export default AdminHomeSectionTop;

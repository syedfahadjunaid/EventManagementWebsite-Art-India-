import React from "react";
import "./OurComunity.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
// import one from "../imges/Rectangle 27.jpg";
// import two from "../imges/Rectangle 28.jpg";
// import three from "../imges/Rectangle 29.jpg";
// import four from "../imges/Rectangle 31.jpg";
// import five from "../imges/Rectangle 32.jpg";
// import six from "../imges/Rectangle 33.jpg";

import {
  useGetCommunityQuery,
  // useCreateCommunityMutation,
  // useGetOneCommunityByIdQuery,
  // useDeleteCommunityByIdMutation,
  // useUpdateCommunityByIdMutation,
} from "../../services/community";

function OurComunity() {
  const responseGetCommunities = useGetCommunityQuery();

  const renderedCommunities = responseGetCommunities?.data?.map(
    (response, index) => {
      return (
        <span className='ourcomunity_image_row1_span' key={index}>
          <img
            src={`${process.env.React_App_Base_Image_Url}${response.communityImage}`}
            alt='community'
          />
          <span className='ourcomunity_image_row1_span_span fade-in'>
            <h3>{response.communityTitle}</h3>
            <p>{response.communitySubTitle}</p>
          </span>
        </span>
      );
    }
  );
  return (
    <div className='ourcomunity'>
      <HeadImage />
      <h3>Our Community</h3>
      <div className='ourcomunity_image'>
        <div className='ourcomunity_image_row1'>{renderedCommunities}</div>
        {/* <div className='ourcomunity_image_row1'>
          <span className='ourcomunity_image_row1_span'>
            <img src={one} alt='comunity' />
            <span className='ourcomunity_image_row1_span_span'>
              <h3>Fireside Chats</h3>
              <p>Have thought-provoking conversations about art and culture</p>
            </span>
          </span>
          <span className='ourcomunity_image_row1_span'>
            <img src={two} alt='comunity' />
            <span className='ourcomunity_image_row1_span_span'>
              <h3>Workshops</h3>
              <p>Engage and interact with the masters of craft</p>
            </span>
          </span>
          <span className='ourcomunity_image_row1_span'>
            <img src={three} alt='comunity' />
            <span className='ourcomunity_image_row1_span_span'>
              <h3>Activities for Kids</h3>
              <p>Enjoy some family time while exploring art and culture</p>
            </span>
          </span>
        </div> */}
        {/* <div className='ourcomunity_image_row2'>
          <span className='ourcomunity_image_row2_span'>
            <img src={four} alt='comunity' />
            <span className='ourcomunity_image_row1_span_span'>
              <h3>Incubator of Talent</h3>
              <p>Supporting young artists from the community</p>
            </span>
          </span>
          <span className='ourcomunity_image_row2_span'>
            <img src={five} alt='comunity' />
            <span className='ourcomunity_image_row1_span_span'>
              <h3>Fireside Chats</h3>
              <p>Have thought-provoking conversations about art and culture</p>
            </span>
          </span>
          <span className='ourcomunity_image_row2_span'>
            <img src={six} alt='comunity' />
            <span className='ourcomunity_image_row1_span_span'>
              <h3>Fireside Chats</h3>
              <p>Have thought-provoking conversations about art and culture</p>
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default OurComunity;

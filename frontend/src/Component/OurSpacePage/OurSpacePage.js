import React from "react";
import "./OurSpacePage.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";
import NavBar from "../Layout/NavBar/NavBar";

import { useParams } from "react-router-dom";

import {
  // useGetSpacesQuery,
  // useCreateSpaceMutation,
  useGetOneSpaceByIdQuery,
  // useDeleteSpaceByIdMutation,
  // useUpdateSpaceByIdMutation,
} from "../../services/spaces";

function OurSpacePage() {
  const { ourSpaceId } = useParams();

  const responseGetOurSpaceById = useGetOneSpaceByIdQuery(ourSpaceId);
  // console.log(responseGetOurSpaceById);
  return (
    <>
      <NavBar />
      {responseGetOurSpaceById.isLoading ? (
        "Loading"
      ) : (
        <div className='ourspacepage'>
          <div className='ourspacepage_banner'>
            <h3>{responseGetOurSpaceById?.data?.space?.ourSpacesTitle}</h3>
            <span></span>
            <p>{responseGetOurSpaceById?.data?.space?.ourSpacesSubTitle}</p>
          </div>
          <div className='ourspacepage_first'>
            <div className='ourspacepage_first_left'>
              <img
                src={`${process.env.React_App_Base_Image_Url}${responseGetOurSpaceById?.data?.space?.ourSpacesImage}`}
                alt='spaceImage'
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                  padding: "1rem",
                }}
              />
              <HeadImage />
              <div className='ourspacepage_first_left_div'>
                <p>
                  {responseGetOurSpaceById?.data?.space?.ourSpacesDescription}
                </p>
                {/* <p>
                  The Art House is a place for creators to come together and
                  share their passion for the arts. From painting and sculpting
                  to theater and music, there is something at The Art House for
                  everyone to explore and expand their craft. Whether you are a
                  beginner or an experienced artist, The Art House provides a
                  space for collaboration, creativity, and community. Come join
                  the inspiring atmosphere of The Art House and discover the
                  exciting possibilities of art.
                </p>
                <p>
                  The Art House is a place for creators to come together and
                  share their passion for the arts. From painting and sculpting
                  to theater and music, there is something at The Art House for
                  everyone to explore and expand their craft. Whether you are a
                  beginner or an experienced artist, The Art House provides a
                  space for collaboration, creativity, and community. Come join
                  the inspiring atmosphere of The Art House and discover the
                  exciting possibilities of art.
                </p>
                <p>
                  The Art House is a place for creators to come together and
                  share their passion for the arts. From painting and sculpting
                  to theater and music, there is something at The Art House for
                  everyone to explore and expand their craft. Whether you are a
                  beginner or an experienced artist, The Art House provides a
                  space for collaboration, creativity, and community. Come join
                  the inspiring atmosphere of The Art House and discover the
                  exciting possibilities of art.
                </p> */}
              </div>
            </div>
            <div className='ourspacepage_first_right'>
              <h3>Highlights</h3>
              <p>{responseGetOurSpaceById?.data?.space?.ourSpacesHighlights}</p>

              {/* <p>Built as per global museum specifications</p>
              <p>Modular facade for easy installation</p>
              <p>Accessible venue</p> */}
            </div>
          </div>
          <NewsLetter />
          <Footer />
        </div>
      )}
    </>
  );
}

export default OurSpacePage;

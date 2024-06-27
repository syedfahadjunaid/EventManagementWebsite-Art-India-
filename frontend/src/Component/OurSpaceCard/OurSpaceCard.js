import React from "react";
import "./OurSpaceCard.css";
// import logo from "../imges/unsplash_NmlnHu1bJwQ.png";
import { Link } from "react-router-dom";

import {
  useGetSpacesQuery,
  // useCreateSpaceMutation,
  // useGetOneSpaceByIdQuery,
  // useDeleteSpaceByIdMutation,
  // useUpdateSpaceByIdMutation,
} from "../../services/spaces";

function OurSpaceCard() {
  const responseOurSpace = useGetSpacesQuery();

  const renderedOurSpaceCards = responseOurSpace?.data?.map(
    (response, index) => {
      return (
        <div className='ourspacecard' key={index}>
          <div className='ourspacecard_left'>
            <img
              src={`${process.env.React_App_Base_Image_Url}${response.ourSpacesImage}`}
              alt='our spaces'
            />
          </div>
          <div className='ourspacecard_right'>
            <h3>{response.ourSpacesTitle}</h3>
            <p>{response.ourSpacesDescription.substr(0, 500)}.....</p>
            {/* <p>
              We provide an atmosphere where artistic expression can thrive,
              offering classes, workshops, open studios and exhibitions. No
              matter what your abilities and interests are, the Art House is the
              ideal location to express your artistic impulses and to develop
              your creativity.
            </p> */}
            <Link to={`/ourSpace/${response._id}`} className='button'>
              Learn More
            </Link>
          </div>
        </div>
      );
    }
  );
  return (
    <div className='ourspacecardMain'>
      {/* <div className='ourspacecard'>
        <div className='ourspacecard_left'>
          <img src={logo} alt='our spaces' />
        </div>
        <div className='ourspacecard_right'>
          <h3>The art House</h3>
          <p>
            The Art House is a sanctuary for creative thinkers, a place of
            passion and creativity. Here, you'll find everything you need to
            express yourself artistically, from painting and sculpting to
            photography, music, dance or any other form of art.
          </p>
          <p>
            We provide an atmosphere where artistic expression can thrive,
            offering classes, workshops, open studios and exhibitions. No matter
            what your abilities and interests are, the Art House is the ideal
            location to express your artistic impulses and to develop your
            creativity.
          </p>
          <Link to='/ourspacepage' className='button'>
            Learn More
          </Link>
        </div>
      </div> */}
      {renderedOurSpaceCards}
    </div>
  );
}

export default OurSpaceCard;

import React from "react";
import "./PrivacyPolicy.css";
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Footer/Footer";

import parse from "html-react-parser";

import {
  // useCreatePrivacyPolicyMutation,
  // useGetOnePrivacyPolicyByIdQuery,
  useGetPrivacyPolicyQuery,
  // useUpdatePrivacyPolicyByIdMutation,
} from "../../services/privacyPolicy";

function PrivacyPolicy() {
  const responsePrivacyPolicy = useGetPrivacyPolicyQuery();
  // const responseGetOnePrivacyPolicy = useGetOnePrivacyPolicyByIdQuery(
  //   responsePrivacyPolicy?.data[0]?._id
  // );

  // console.log(responsePrivacyPolicy);
  return (
    <>
      <NavBar />
      {responsePrivacyPolicy.isLoading ? (
        "Loading..."
      ) : (
        <div className='privacypolicy'>
          <div className='privacypolicy_header'>
            <h1>{responsePrivacyPolicy?.data[0]?.privacyPolicyHeading}</h1>
          </div>

          <div
            className='privacypolicy_para'
            style={{
              textAlign: "justify",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}>
            {parse(responsePrivacyPolicy?.data[0]?.privacyPolicyDescription ? responsePrivacyPolicy?.data[0]?.privacyPolicyDescription : "")}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default PrivacyPolicy;

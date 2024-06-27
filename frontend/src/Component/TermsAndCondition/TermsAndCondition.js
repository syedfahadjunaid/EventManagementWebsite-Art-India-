import React from "react";
import NavBar from "../Layout/NavBar/NavBar";
import Footer from "../Footer/Footer";

import parse from "html-react-parser";

import {
  // useCreateTermsAndConditionsMutation,
  // useGetOneTermsAndConditionsByIdQuery,
  // useUpdateTermsAndConditionsByIdMutation,
  useGetTermsAndConditionsQuery,
} from "../../services/termsAndConditions";

function TermsAndCondition() {
  const responseTermsAndConditions = useGetTermsAndConditionsQuery();
  return (
    <>
      <NavBar />
      {responseTermsAndConditions.isLoading ? (
        "Loading..."
      ) : (
        <div className='privacypolicy'>
          <div className='privacypolicy_header'>
            <h1>
              {responseTermsAndConditions?.data[0]?.termsAndConditionsHeading}
            </h1>
          </div>
          <div
            className='privacypolicy_para'
            style={{
              textAlign: "justify",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}>
            {parse(
              responseTermsAndConditions?.data[0]?.termsAndConditionsDescription ? responseTermsAndConditions?.data[0]?.termsAndConditionsDescription : ""
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default TermsAndCondition;

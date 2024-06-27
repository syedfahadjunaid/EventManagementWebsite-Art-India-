import React, { useRef } from "react";
import "./HomeBanner.css";
// import img from '../../imges/ezgif-4-568e505bef 1.gif'
import { useNavigate } from "react-router-dom";

import {
  useGetHeroSectionQuery,
  // useCreateHeroSectionMutation,
  // useUpdateHeroSectionByIdMutation,
  // useDeleteHeroSectionByIdMutation,
  // useGetOneHeroSectionByIdQuery,
} from "../../../services/heroSection";

function HomeBanner({ btn }) {
  const responseGetHeroSection = useGetHeroSectionQuery();
  // console.log(
  //   `${process.env.React_App_Base_Image_Url}${responseGetHeroSection?.data[0]?.heroSectionBannerVideo}`
  // );
  // const history = useNavigate();

  return (
    <>
      {!responseGetHeroSection.isLoading && (
        <div
          className='homebanner'
          // style={{
          //   background: `url(${process.env.React_App_Base_Image_Url}${responseGetHeroSection?.data[0]?.heroSectionBannerVideo})`,
          // }}
        >
          <video
            // src={responseGetHeroSection?.data?.map((data) => {
            //   return `${process.env.React_App_Base_Image_Url}${data?.heroSectionBannerVideo}`
            // })}
            src={`${process.env.React_App_Base_Image_Url}${responseGetHeroSection?.data[0]?.heroSectionBannerVideo}`}
            muted
            autoPlay
            loop
            style={{ width: "100%" }}
          />
          <div className='homebannerSubDiv' style={{ position: "absolute" }}>
            <p className='homebanner_para'>
              {responseGetHeroSection?.data[0]?.heroSectionBannnerTitle}
            </p>
            <span className='homebanner_span'></span>
            <p className='homebanner_para1'>
              {responseGetHeroSection?.data[0]?.heroSectionBannerSubTitle}
            </p>
            {btn}
          </div>
        </div>
      )}
    </>
  );
}

export default HomeBanner;

import React from "react";
import "./OurSpaces.css";
import HeadImage from "../Layout/HeadImage/HeadImage";
import OurSpaceCard from "../OurSpaceCard/OurSpaceCard";
function OurSpaces() {
  return (
    <div className="ourspaces">
      <HeadImage />
      <h3>Our Spaces</h3>
      <div className="ourspaces_card">
      <OurSpaceCard/>
      </div>
     
    </div>
  );
}

export default OurSpaces;

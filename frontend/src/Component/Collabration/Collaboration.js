import React from "react";
import { Link } from "react-router-dom";
import img from "../imges/Rectangle 118.png";
import Button from "../Layout/Button/Button";
import DiwaliBrusselCard from "../Layout/DiwaliBrusselCard/DiwaliBrusselCard";
import img2 from "../imges/collabration/pexels-photo-3277806.jpeg";
import img3 from "../imges/Rectangle 119.png";
import img4 from "../imges/Rectangle 120.png";
import img5 from "../imges/Rectangle 121.png";
import img6 from "../imges/Rectangle 122.png";
import img7 from '../imges/Rectangle 104.png'
import img8 from '../imges/Rectangle 103.png'
import img9 from '../imges/Rectangle 102.png'
import HeadImage from "../Layout/HeadImage/HeadImage";
import Blogcard from "../BlogCard/Blogcard";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Footer from "../Footer/Footer";

function Collaboration() {
  return (
    <div className="diwalibrussels">
      <div className="diwalibrussels_banner">
        <h3>Collaboration</h3>
        <Link to="#"> Order Now</Link>
      </div>
      <div className="diwalibrussels_content">
        <div className="diwalibrussels_content_left">
          <p>
            We heap scorn upon our nemesis, Our foe, our sworn enemy; We must
            stand strong and brave, Rallying to fight we stand tall and free;
            For we know what they are capable of, The atrocities they have done;
            We will never forget their injustices And their merciless conquests,
            their heinous crimes and ploys; We shall never suffer their
            unwelcome invasions.
          </p>
          <p>
            Nor forgive their sinful oppresion of us; We shall always remember
            their acts of wickedness, Their enmity and disdain for all mankind;
            With courage and fortitude we shall not shirk from our duty, To
            expel them and their evils from this world; Our feud shall continue
            until the day The adversary is vanquished and the truth wins out.
          </p>
          <Button bgcolor="#E68639" color="#fff">
            Watch Now
          </Button>
        </div>
        <div className="diwalibrussels_content_right">
          <img src={img} alt="banner" />
        </div>
      </div>
      <div className="diwalibrussels_heading">
        <p>Events</p>
      </div>
      <div className="diwalibrussels_card">
        <DiwaliBrusselCard image={img9}/>
        <DiwaliBrusselCard image={img8}/>
        <DiwaliBrusselCard image={img7}/>
      </div>
      <div className="diwalibrussels_heading">
        <p>Gallery</p>
      </div>
      <div className="diwalibrussels_images">
        <div className="diwalibrussels_images_row1">
          <img src={img2} alt="banner" />
          <img src={img3} alt="banner" />
          <img src={img4} alt="banner" />
        </div>
        <div className="diwalibrussels_images_row2">
          <img src={img5} alt="banner" />
          <img src={img6} alt="banner" />
        </div>
      </div>
      <div className="diwalibrussels_heading">
        <p>Video</p>
      </div>
      <div className="collabortion_video"></div>
      <div className="diwalibrussels_know_more">
        <HeadImage />
        <h3>Know More</h3>
        <div className="diwalibrussels_know_more_card">
          <Blogcard />
          <Blogcard />
          <Blogcard />
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default Collaboration;

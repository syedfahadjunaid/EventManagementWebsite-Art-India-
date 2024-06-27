import React from "react";
import "./DiwaliBrusselCard.css";
import { Link } from "react-router-dom";
// import img from '../../imges/Rectangle 102.png'

function DiwaliBrusselCard({ image }) {
  return (
    <div
      className='diwalibrusselcard'
      style={{ backgroundImage: `url("${image}")` }}>
      <div className='diwalibrusselcard_details'>
        <p>
          We heap scorn upon our nemesis, Our foe, our sworn enemy; We must
          stand strong and brave, Rallying to.
        </p>
        <span>
          <Link to='/booknow' bgcolor='#E68639' color='#fff' className='button'>
            Book Now
          </Link>
          <Link
            to='/infopage/:ID'
            bordercolor='#E68639'
            color='#E68639'
            className='button1'>
            Read More
          </Link>
        </span>
      </div>
    </div>
  );
}

export default DiwaliBrusselCard;

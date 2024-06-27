import React, { useState } from "react";
import "./BookNow.css";
import img from "../imges/Rectangle 60.png";
import img1 from "../imges/Rectangle 61.png";
import img2 from "../imges/Rectangle 62.png";
import img3 from "../imges/Vector 1.png";
import { useEffect } from "react";
function BookNowTicket({
  setSelectDate,
  setSelectPayment,
  setSelectTicket,
  setTotalPrice,
}) {
  const [selectedNoOfTicket, setSelectedNoOfTicket] = useState([]);
  const [total, setTotal] = useState();
  const [selectedSeatNo, setSelectedSeatNo] = useState([]);
  const handleChange = () => {
    setSelectTicket(false);
    setSelectDate(false);
    setSelectPayment(true);
  };
  const [selected, setSelected] = useState([]);
  const selectTickethandle = (e) => {
    e.stopPropagation();
    if (selected.includes(e.target.value)) {
      const newSelected = selected.filter((item) => item !== e.target.value);
      setSelected(newSelected);
    } else {
      setSelected([...selected, e.target.value]);
    }
  };
  useEffect(() => {
    setTotal(selected.length * 1200);
    setSelectedNoOfTicket(selected.length);
    setSelectedSeatNo(selected);
    setTotalPrice(total);
  }, [selected]);

  return (
    <div className="booknowticket">
      <div className="booknowticket_type">
        <span>
          <img src={img} placeholder="seattype" alt="seattype"/>
          <p>Unavailable</p>
        </span>
        
        <span>
          <img src={img1} placeholder="seattype" alt="seattype"/>
          <p>Available</p>
        </span>
        <span>
          <img src={img2} placeholder="seattype" alt="seattype"/>
          <p>Selected</p>
        </span>
      </div>
      <div className="booknowticket_screen">
        <img src={img3} placeholder="screen" alt="screen"/>
      </div>
      <div className="booknowticket_select_seat">
        <span>
          <h3>Selected No of Ticket:</h3>
          <p>{selectedNoOfTicket}</p>
        </span>
        <span>
          <h3>Selected Seat No:</h3>
          <span className="booknowticket_select_seat_para">
            {selectedSeatNo?.map((item) => (
              <p>{item},</p>
            ))}
          </span>
        </span>
        <span>
          <h3>Total:</h3>
          <p>₹{total} </p>
        </span>
      </div>
      <div className="booknowticket_seat">
        <div className="booknowticket_seat_left">
          <span>
            <input
              type="checkbox"
              check
              onChange={selectTickethandle}
              value={1}
            />
            <input type="checkbox" onChange={selectTickethandle} value={2} />
            <input type="checkbox" onChange={selectTickethandle} value={3} />
          </span>
          <span>
            <input type="checkbox" onChange={selectTickethandle} value={4} />
            <input type="checkbox" onChange={selectTickethandle} value={5} />
            <input type="checkbox" onChange={selectTickethandle} value={6} />
          </span>
          <span>
            <input type="checkbox" onChange={selectTickethandle} value={7} />
            <input type="checkbox" onChange={selectTickethandle} value={8} />
            <input type="checkbox" onChange={selectTickethandle} value={9} />
          </span>
          <span>
            <input type="checkbox" onChange={selectTickethandle} value={10} />
            <input type="checkbox" onChange={selectTickethandle} value={11} />
            <input type="checkbox" onChange={selectTickethandle} value={12} />
          </span>
          <span>
            <input type="checkbox" onChange={selectTickethandle} value={13} />
            <input type="checkbox" onChange={selectTickethandle} value={14} />
            <input type="checkbox" onChange={selectTickethandle} value={15} />
          </span>
        </div>
        <div className="booknowticket_seat_center">
          <span>
            <input type="checkbox" onChange={selectTickethandle} value={16} />
            <input type="checkbox" onChange={selectTickethandle} value={17} />
            <input type="checkbox" onChange={selectTickethandle} value={18} />
            <input type="checkbox" onChange={selectTickethandle} value={19} />
            <input type="checkbox" onChange={selectTickethandle} value={20} />
            <input type="checkbox" onChange={selectTickethandle} value={21} />
            <input type="checkbox" onClick={selectTickethandle} value={22} />
            <input type="checkbox" onClick={selectTickethandle} value={23} />
            <input type="checkbox" onClick={selectTickethandle} value={24} />
            <input type="checkbox" onClick={selectTickethandle} value={25} />
            <input type="checkbox" onClick={selectTickethandle} value={26} />
            <input type="checkbox" onClick={selectTickethandle} value={27} />
            <input type="checkbox" onClick={selectTickethandle} value={28} />
            <input type="checkbox" onClick={selectTickethandle} value={29} />
            <input type="checkbox" onClick={selectTickethandle} value={30} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={31} />
            <input type="checkbox" onClick={selectTickethandle} value={32} />
            <input type="checkbox" onClick={selectTickethandle} value={33} />
            <input type="checkbox" onClick={selectTickethandle} value={34} />
            <input type="checkbox" onClick={selectTickethandle} value={35} />
            <input type="checkbox" onClick={selectTickethandle} value={36} />
            <input type="checkbox" onClick={selectTickethandle} value={37} />
            <input type="checkbox" onClick={selectTickethandle} value={38} />
            <input type="checkbox" onClick={selectTickethandle} value={39} />
            <input type="checkbox" onClick={selectTickethandle} value={40} />
            <input type="checkbox" onClick={selectTickethandle} value={41} />
            <input type="checkbox" onClick={selectTickethandle} value={42} />
            <input type="checkbox" onClick={selectTickethandle} value={43} />
            <input type="checkbox" onClick={selectTickethandle} value={44} />
            <input type="checkbox" onClick={selectTickethandle} value={45} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={46} />
            <input type="checkbox" onClick={selectTickethandle} value={47} />
            <input type="checkbox" onClick={selectTickethandle} value={48} />
            <input type="checkbox" onClick={selectTickethandle} value={49} />
            <input type="checkbox" onClick={selectTickethandle} value={50} />
            <input type="checkbox" onClick={selectTickethandle} value={51} />
            <input type="checkbox" onClick={selectTickethandle} value={52} />
            <input type="checkbox" onClick={selectTickethandle} value={53} />
            <input type="checkbox" onClick={selectTickethandle} value={54} />
            <input type="checkbox" onClick={selectTickethandle} value={55} />
            <input type="checkbox" onClick={selectTickethandle} value={56} />
            <input type="checkbox" onClick={selectTickethandle} value={57} />
            <input type="checkbox" onClick={selectTickethandle} value={58} />
            <input type="checkbox" onClick={selectTickethandle} value={59} />
            <input type="checkbox" onClick={selectTickethandle} value={60} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={61} />
            <input type="checkbox" onClick={selectTickethandle} value={62} />
            <input type="checkbox" onClick={selectTickethandle} value={63} />
            <input type="checkbox" onClick={selectTickethandle} value={64} />
            <input type="checkbox" onClick={selectTickethandle} value={65} />
            <input type="checkbox" onClick={selectTickethandle} value={66} />
            <input type="checkbox" onClick={selectTickethandle} value={67} />
            <input type="checkbox" onClick={selectTickethandle} value={68} />
            <input type="checkbox" onClick={selectTickethandle} value={69} />
            <input type="checkbox" onClick={selectTickethandle} value={70} />
            <input type="checkbox" onClick={selectTickethandle} value={71} />
            <input type="checkbox" onClick={selectTickethandle} value={72} />
            <input type="checkbox" onClick={selectTickethandle} value={73} />
            <input type="checkbox" onClick={selectTickethandle} value={74} />
            <input type="checkbox" onClick={selectTickethandle} value={75} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={76} />
            <input type="checkbox" onClick={selectTickethandle} value={77} />
            <input type="checkbox" onClick={selectTickethandle} value={78} />
            <input type="checkbox" onClick={selectTickethandle} value={79} />
            <input type="checkbox" onClick={selectTickethandle} value={80} />
            <input type="checkbox" onClick={selectTickethandle} value={81} />
            <input type="checkbox" onClick={selectTickethandle} value={82} />
            <input type="checkbox" onClick={selectTickethandle} value={83} />
            <input type="checkbox" onClick={selectTickethandle} value={84} />
            <input type="checkbox" onClick={selectTickethandle} value={85} />
            <input type="checkbox" onClick={selectTickethandle} value={86} />
            <input type="checkbox" onClick={selectTickethandle} value={87} />
            <input type="checkbox" onClick={selectTickethandle} value={88} />
            <input type="checkbox" onClick={selectTickethandle} value={89} />
            <input type="checkbox" onClick={selectTickethandle} value={90} />
          </span>
        </div>
        <div className="booknowticket_seat_right">
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={91} />
            <input type="checkbox" onClick={selectTickethandle} value={92} />
            <input type="checkbox" onClick={selectTickethandle} value={93} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={94} />
            <input type="checkbox" onClick={selectTickethandle} value={95} />
            <input type="checkbox" onClick={selectTickethandle} value={96} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={97} />
            <input type="checkbox" onClick={selectTickethandle} value={98} />
            <input type="checkbox" onClick={selectTickethandle} value={99} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={100} />
            <input type="checkbox" onClick={selectTickethandle} value={101} />
            <input type="checkbox" onClick={selectTickethandle} value={102} />
          </span>
          <span>
            <input type="checkbox" onClick={selectTickethandle} value={103} />
            <input type="checkbox" onClick={selectTickethandle} value={104} />
            <input type="checkbox" onClick={selectTickethandle} value={105} />
          </span>
        </div>
      </div>
      {/* <SeatPicker
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        rows={rows}
        alpha
        maxReservableSeats={10}
        visible
      /> */}
      {selected?.length ? (
        <button onClick={handleChange}>Next</button>
      ) : (
        <button>Select Seat</button>
      )}
    </div>
  );
}

export default BookNowTicket;

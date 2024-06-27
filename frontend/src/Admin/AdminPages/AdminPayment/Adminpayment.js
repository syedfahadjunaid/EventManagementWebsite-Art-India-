import { Computer } from '@mui/icons-material';
import { MenuItem, Select } from '@mui/material';
import React from 'react'

function Adminpayment() {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
      <div className="adminorderpage ">
        <div className="adminorderpage_heading adminabout">
          <Computer className="adminsidebar_icon" style={{ fontSize: "35px" }} />
          <p> Payment Methods </p>
        </div>
        <div className="adminorderpage_table adminabout">
          <form className="modal_form">
            <p className="modal_form_para">Cash on Delivery</p>
            <span>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                style={{
                  width: "100%",
                  border: "transparent",
                  outline: "transparent",
                  textAlign:'start'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Enable</MenuItem>
                <MenuItem value={20}>Disable</MenuItem>
              </Select>
            </span>
            <p className="modal_form_para">Paypal Credentials</p>
            <p className="modal_form_para">Paypal Public Key</p>
            <span>
              <input
                type="text"
                placeholder="AQumDmAqdKRRg5kJhV2UiNE4euNm-iEJhK4pCMmDF7mpt87d23-VCxuWPs3ULIY5NWxZfRC8rMsGogxV"
              />
            </span>{" "}
            <p className="modal_form_para">Paypal Private Key</p>
            <span>
              <input
                type="text"
                placeholder="AQumDmAqdKRRg5kJhV2UiNE4euNm-iEJhK4pCMmDF7mpt87d23-VCxuWPs3ULIY5NWxZfRC8rMsGogxV"
              />
            </span>
            <button className="modal_form_buttom">Update Payment Method</button>
          </form>
        </div>
      </div>
    );
}

export default Adminpayment
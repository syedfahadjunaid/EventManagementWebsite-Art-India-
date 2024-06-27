import React from 'react'
import './AdminGenralSetting.css'
import { Computer } from '@mui/icons-material';
function AdminGenralSetting() {
      return (
        <div className="adminorderpage ">
          <div className="adminorderpage_heading adminabout">
            <Computer className="adminsidebar_icon" style={{ fontSize: "35px" }} />
            <p> General Settings </p>
          </div>
          <div className="adminorderpage_table adminabout">
            <form className="modal_form">
              <p className="modal_form_para">General Informations</p>
              <span>
                <input type="text" placeholder="Website Title" />
              </span>
    
              <p className="modal_form_para">Favicon</p>
              <input type="file" />
    
              <button className="modal_form_buttom">Update Setting</button>
            </form>
          </div>
         
        </div>
      );
}

export default AdminGenralSetting
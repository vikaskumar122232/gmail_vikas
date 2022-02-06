import React from 'react';
import "./css/emaillist.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';


function Emailbody({name,subject,message,time}) {
  return <div className="Emailbody">
    <div className="Emailbody__left">
    <CheckBoxOutlineBlankIcon />
      <StarBorderIcon />
  
      <h4>{ name}</h4>
    </div>
    <div className="Emailbody__middel">
      <div className="Emailbody__middel_msg">
        <p><b>{subject}</b>{ message}</p>
      </div> 
    </div>
    <div className="Emailbody__right">
      <p>{ time}</p>
      </div>
  </div>;
}

export default Emailbody;

import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import "./css/emaillist.css";

function Emailtype() {
    return <div className="Emaitype">
        <div className="Emailtype__options Emailtype__options--active">
        <InboxIcon/>
            <p>Primary</p>
           
        </div>
        <div className="Emailtype__options">
        <PeopleIcon/>
            <p>Social</p>
            
        </div>
        <div className="Emailtype__options">
        <LocalOfferIcon/>
            <p>Promotions</p>
           
        </div>
      
  </div>;
}

export default Emailtype;

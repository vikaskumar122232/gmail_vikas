import React from 'react';
import "./css/emaillist.css";
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
function Emaillist() {
    return <div className="Emaillist">
        <EmailListSetting />
        <Emailtype />
      <Emailbody name="vikas kumar" subject="this is a sub" message="  this is a simple message this is a simple message this is a simple message this is a simple message this is a simple message this is a simple message" time="03 : 45" />
    
  </div>;
}

export default Emaillist;

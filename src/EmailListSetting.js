import React from 'react';
import { IconButton } from '@material-ui/core';
import "./css/emaillist.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
function EmailListSetting() {
    return <div className="Emaillist__settings">
        <div className="Emaillist__settingLeft">
            <IconButton>
                    <CheckBoxOutlineBlankIcon/>
            </IconButton> 
            <IconButton>
                    <ArrowDropDownIcon/>
            </IconButton> 
            <IconButton>
                    <RefreshIcon/>
            </IconButton> 
            <IconButton>
                    <MoreVertIcon/>
            </IconButton> 
        </div>
        <div className="Emaillist__settingright">
            <p>1-20 of 12,109</p>
            <IconButton>
                    <ChevronLeftIcon/>
            </IconButton> 
            <IconButton>
                    <ChevronRightIcon/>
            </IconButton>
        </div>
  </div>;
}

export default EmailListSetting;

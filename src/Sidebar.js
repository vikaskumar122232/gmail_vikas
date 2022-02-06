import React from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';
import "./css/sidebar.css";
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import ChatIcon from '@mui/icons-material/Chat';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import EmailIcon from '@mui/icons-material/Email';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {
  const dispatch = useDispatch();
  return(
  <div className="sidebar">
    <Button startIcon={<AddIcon/>} className="compose__btn" onClick={()=>dispatch(openSendMessage())}>compose</Button>
      <Sidebaroptions Icon={InboxIcon} title="Inbox" number="221" isactive={true}/>
      <Sidebaroptions Icon={StarRateIcon} title="Starred" number="" />
      <Sidebaroptions Icon={WatchLaterIcon} title="Snoozed" number="" />
      <Sidebaroptions Icon={SendIcon} title="Sent" number="" />
      <Sidebaroptions Icon={LabelImportantIcon} title="Important" number="" />
      <Sidebaroptions Icon={ChatIcon} title="Chats" number="" />
      <Sidebaroptions Icon={ScheduleSendIcon} title="Scheduled" number="" />
      <Sidebaroptions Icon={DraftsIcon} title="Drafts" number="45" isestactive={true}/>
      <Sidebaroptions Icon={EmailIcon} title="All Mails" number="" />
      <Sidebaroptions Icon={ReportIcon} title="Spam" number="21" isestactive={true} />
      <Sidebaroptions Icon={DeleteIcon} title="Bin" number="" />
      <Sidebaroptions Icon={LabelIcon} title="Cateories" number="" isestactive={true} />
      <Sidebaroptions Icon={SettingsIcon} title="Manage lables" number="" />
      <Sidebaroptions Icon={AddIcon} title="Create new label" number="" />
      <Sidebaroptions Icon={ExpandMoreIcon} title="More" number="" />
      <h3 className='sidebar__heading'>Meet</h3>
      <Sidebaroptions Icon={VideocamIcon} title="New meeting" number="" />
      <Sidebaroptions Icon={KeyboardIcon} title="Join a meeting" number="" />

    </div>
  );
  
}

export default Sidebar;


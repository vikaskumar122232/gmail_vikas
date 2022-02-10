import React from 'react';
import {useState} from 'react';
import "./css/compose.css";
import RemoveIcon from '@mui/icons-material/Remove';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockClockIcon from '@mui/icons-material/LockClock';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import { collection, addDoc, serverTimestamp} from 'firebase/firestore';
function Compose() {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const dispatch = useDispatch();
    const fromSubmit = (e) => {
        e.preventDefault();
        if (to === "") {
            return alert("to is required");
        }
        if (subject === "") {
            return alert("subject is required");
        }
   addDoc(collection(db, "Emails"), {
            to: to,
            subject: subject,
            message: message,
            createAt:serverTimestamp()
      }); 
        setTo("");
        setSubject("");
        setMessage("");
        alert("mail sent");
        dispatch(closeSendMessage());
    
    };
    return <div className="compose">
        <div className="compose__header">
            <div className="compose__header_left">
                <span>New message</span>
            </div>
            <div className="compose__header_right">
                <RemoveIcon onClick={()=>dispatch(closeSendMessage())} />
                <OpenInFullIcon />
                <CloseIcon onClick={() => dispatch(closeSendMessage())}/>
            </div>
        </div><form onSubmit={fromSubmit}>
        <div className="compose__body">
            <div className="compose__body_form">
                <input type="Email" placeholder='Reciepents'value={to} onChange={(e)=>setTo(e.target.value)} />
                <input type="text" placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/> 
                    <textarea rows="16" value={message}  onChange={(e)=>setMessage(e.target.value)} ></textarea>
            </div>

        </div>
        <div className="compose__footer">
            <div className="compose__footer__left">
                <button type="submit">Send</button>
                <ExpandMoreIcon/>
            </div>
            <div className="compose__footer__right">
                <div className="compose__svg__left">
                <FormatColorTextIcon />
                <AttachFileIcon />
                <InsertLinkIcon />
                <InsertEmoticonIcon />
                <AddToDriveIcon />
                <InsertPhotoIcon />
                <LockClockIcon />
                <DriveFileRenameOutlineIcon />
                </div>
           <div className="compose__svg__right">
                <MoreVertIcon />
                <DeleteIcon />
              </div>  
            </div>
            </div>
            </form>
  </div>;
}

export default Compose;

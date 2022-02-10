import{ React, useState,useEffect} from 'react';
import "./css/emaillist.css";
import EmailListSetting from './EmailListSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { collection, onSnapshot, } from 'firebase/firestore';
import { db } from './firebase';
import moment from 'moment';

function Emaillist() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "Emails"), (snapshot) => {
      setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    });
  },[]);
  console.log(emails);

  return (
    <div className="Emaillist">
      
      <EmailListSetting />
      <Emailtype />
      {
        emails.map(({ id, data }) => {
          return  <Emailbody name={data.to} subject={data.subject} message={data.message} time="20:12" />
          
        })
      }
    
    </div>
  );
}

export default Emaillist;

import { db } from '../firebase';
import { collection, getDocs, addDoc,  } from 'firebase/firestore';

const mailCollectionRef = collection(db, "mails");
class mailDataService{
    sentMail = (composeMails) => {

        return addDoc(mailCollectionRef, composeMails);
    };
    getAllEmails = () => {
        return getDocs(mailCollectionRef);
    };
};
export default new mailDataService();

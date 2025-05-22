import { db } from '../firebase.js';
import insuranceFAQs from './faqs.js';
import { doc, setDoc } from 'firebase/firestore';

export const writeDataToDB = async () => {
    try{

        const docRef =  doc(db, 'site_data', 'insurance_FAQs');

        await setDoc(docRef, { insuranceFAQs });
        console.log("Data written");

    } catch (err) {
        console.log(`Error occured : ${err}`)
    }
}
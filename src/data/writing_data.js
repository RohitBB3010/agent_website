import { db } from '../firebase.js';
import categories from './categories.js';
import { doc, setDoc } from 'firebase/firestore';

export const writeDataToDB = async () => {
    try{

        const docRef =  doc(db, 'site_data', 'insurance_types');

        await setDoc(docRef, { categories });
        console.log("Data written");

    } catch (err) {
        console.log(`Error occured : ${err}`)
    }
}
import { useEffect } from "react";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';

export default function Categories() {

    useEffect(() => {

        const fetchCategories = async () => {
            try{
                const docRef = doc(db, 'site_data', 'insurance_types');

                const categoriesData = await getDoc(docRef);

                console.log(`Categories dats : ${categoriesData.data().categories[0].title}`);
            } catch (err) {
                console.log(`Error occured : ${err}`);
            }
        }

        fetchCategories();

    }, []);

    return(
        <div className="categories">

        </div>
    );
}
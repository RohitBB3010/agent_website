import {doc, getDoc} from 'firebase/firestore';
import { db } from '../../firebase.js';
import { useState, useEffect } from 'react';
import './Categories.css';

export default function Categories(){

    const [plans, setPlans] = useState([]);
    const [ selectedCategory, setSelectedCategory ] = useState('protect-my-family');

    useEffect(() => {

        const fetchData = async () => {
            const plansDocRef = doc(db, 'site_data', 'lic_plans');

            const plansDoc = await getDoc(plansDocRef);

            const plansData = plansDoc.data();

            setPlans(plansData);

            console.log(plansData);
        };

        fetchData();
    }, []);

    function modifyString(string){
        let changedString = string.split('-');
        
        let changedWord = '';

        changedString.map((part) => {
            changedWord = changedWord + part.charAt(0).toUpperCase() + part.slice(1) + ' ';
        });

        return changedWord;
    }

    return (
        <div className="categories">
            <div className="categories-title">
                Browse custom plans for you!!
            </div>
            <ol className="categories-list">
                { Object.keys(plans).map((category) => {
                    console.log(category);
                    console.log(selectedCategory);
                    return <button onClick={() => {
                        setSelectedCategory(category);
                    }} className='category-button' id={category === selectedCategory ? 'is-selected' : '' }> {modifyString(category)} </button>
                }) }
            </ol>
        </div>
    );
};

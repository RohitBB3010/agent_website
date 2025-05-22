import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase.js';
import './FAQs.css';

export default function FAQS(){
    const [faqs, setFAQS] = useState([]);

    useEffect(() => {

        const fetchFAQs = async () => {

            const docRef = doc(db, 'site_data', 'insurance_FAQs');

            const FAQsDataFirebase = await getDoc(docRef);

            const FAQsData = FAQsDataFirebase.data();

            setFAQS(FAQsData.insuranceFAQs);
        };

        fetchFAQs();
    }, []);

    useEffect(() => {
        console.log(faqs);
    }, [faqs]);

    return(
        <div className="faqs" id="faqs">
            <div className="faqs-title"> Frequently Asked Questions </div>
            <div className="faqs-text"> Below are some common queries and concerns people have about insurance policies. If your question isn't mentioned here, feel free to reach out to us </div>
            <div className="faqs-list">
                { faqs.map((faq) => {
                    return <FAQItem {...faq} />
                })}
            </div>
        </div>
    );
}

function FAQItem({question, answer}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
            {question}
            <span className="faq-icon">{isOpen ? "▲" : "▼"}</span>
            </button>
            <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
                <div className="faq-answer">{answer}</div>
            </div>
        </div>
    );
}
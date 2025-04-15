import { useState } from 'react';
import './Contact.css';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function Contact (){
    const [formInput, setFormInput] = useState({
        fullName : '',
        phone : '',
        email : '',
        insuranceTypeInterested : ''
    });

    function handleInputChange(changedValue, changedField){
    
        setFormInput((prevInput) => ({
            ...prevInput,
            [changedField] : changedValue
        }));
    }

    const writeInputToDB = async(formInput) => {
        console.log("Function called");
        try{
            const docRef = doc(db, 'userInputs', `userId_${formInput.fullName}`);

            await setDoc(docRef, formInput);

            console.log("Document written successfully");
        } catch (err) {
            console.log(`Error writing doc :${err}`);
        }
    }

    return(
        <div className="contact">
            <div className="contact-title"> Contact Us </div>
            <span className="contact-text"> Reach out to us via phone, email or simply fill out the form</span>
            <div className='contact-space'>
                <div className="contact-form">
                    <div id="form-title"> Just fill out the form below, and we'll get back to you shortly!! </div>
                    <div className="fullname" id='input'>
                        <span id='input-text'> Enter full name</span>
                        <input value={formInput.fullName} type='text' onChange={(e) => { handleInputChange(e.target.value, 'fullName' ); }} id='input-field'/>
                    </div>
                    <div className="email" id='input'>
                        <span id='input-text'> Enter email address</span>
                        <input value={formInput.email} type='email' onChange={(e) => { handleInputChange(e.target.value, 'email' ); }} id='input-field'/>
                    </div>
                    <div className="phone" id='input'>
                        <span id='input-text'> Enter phone number </span>
                        <input value={formInput.phone} onChange={(e) => { handleInputChange(e.target.value, 'phone' ); }} type='phone' id='input-field'/>
                    </div>
                    <div className="imsurance-type" id='input'>
                        <span id='input-text'> Enter phone number </span>
                        <select value={formInput.insuranceTypeInterested} onChange={(event) => { handleInputChange(event.target.value, 'insuranceTypeInterested'); }} id='input-field' >
                            <option value="">--Select an Option--</option>
                            <option value="life-insurance">Life Insurance</option>
                            <option value="health-insurance">Health Insurance</option>
                            <option value="term-plan">Term Plan</option>
                            <option value="child-policy">Child Policy</option>
                            <option value="retirement-plan">Retirement Plan</option>
                            <option value="other">Other</option>
                        </select>
                        <button className='submit-btn' onClick={() => writeInputToDB(formInput)}> Submit </button>
                    </div>
                    <div className="divider" />
                    <div className="contact-details">

                    </div>
                </div>
                <div className="contact-details"></div>
            </div>
        </div>
    );
}
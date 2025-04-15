import { useState } from 'react';
import './Contact.css';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { FaFacebook, FaInstagram, FaMailchimp, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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

    const validateForm = () => {
        const { fullName, phone, email, insuranceTypeInterested } = formInput;
      
        if (!fullName.trim() || !phone.trim() || !email.trim() || !insuranceTypeInterested) {
          alert("Please fill out all the fields.");
          return false;
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return false;
        }
      
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
          alert("Please enter a valid 10-digit phone number.");
          return false;
        }
      
        return true;
      };
      

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
            <span className="contact-text"> Reach out to us via phone, email or simply fill out the form !!! </span>
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
                    <div className="insurance-type" id='input'>
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
                        <button className='submit-btn' onClick={() => {
                            if(validateForm()){
                                writeInputToDB(formInput)
                            }
                        }}> Submit </button>
                    </div>
                </div>
                <div className="divider" />
                <div className="contact-details"> 
                    <div className="contact-details-text"> Contact us at any of the sources below and we would resond within 24 hours. We are at your service 24*7</div>
                    <p id='detail' className='phone-detail'><FaPhoneAlt /> +91 93261 67774 / +91 99879 98424  </p>
                    <p id='detail' className='email-detail'><MdEmail /> +91 93261 67774 / +91 99879 98424  </p>
                    <p id='detail' className='instagram-detail'><FaInstagram /> +91 93261 67774 / +91 99879 98424  </p>
                    <p id='detail' className='facebook-detail'><FaFacebook /> +91 93261 67774 / +91 99879 98424  </p>
                </div>
            </div>
        </div>
    );
}
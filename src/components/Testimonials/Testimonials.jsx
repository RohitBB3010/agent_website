import { useEffect, useState } from 'react';
import './Testimonials.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {

        const fetchTestimonials = async() => {
            const docRef = doc(db, 'site_data', 'testimonials');
            const docSnap = await getDoc(docRef);
            
            if(docSnap.exists()){
                const fetchedTestimonials = Object.values(docSnap.data().testimonials);

                if(JSON.stringify(fetchTestimonials) !== JSON.stringify(testimonials)){
                    setTestimonials(fetchedTestimonials);
                }
            }
        }

        fetchTestimonials();
    }, []);

    useEffect(() => {
        console.log(testimonials);
    }, [testimonials]);

    return(
        <>
            <div className="testimonials">
                <span className="testimonials-title"> What Our Clients Say About Us </span>
                <div className='testimonials-array'>
                    { testimonials.map((testimonyObj) => {
                        return <TestimonialCard {...testimonyObj} key={testimonyObj.client_name} />
                    })}
                </div>
            </div>
        </>
    );
}

function TestimonialCard({relation_years, client_name, insurance_type, testimony}){

    return(
        <div className='testimonial-card'>
            <div className='name-years'>
                <span className='client-name'> {client_name}, </span>
                <span className='relation-years'> { relation_years} years</span>
            </div>
            <div className='insurance-type'>
                { insurance_type }
            </div>
            <p className='testimony'> "{testimony}" </p>
        </div>
    );
}
import './Home.css';
import StatPhoto1 from '../../assets/banner/banner-photo1.jpg';
import StatPhoto2 from '../../assets/banner/banner-photo2.jpg';
import StatPhoto3 from '../../assets/banner/banner-photo3.jpg';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase.js';

export default function Home() {
    const [stats, setStats] = useState({
        'Claim Success Rate' : 0,
        'Customers' : 0,
        'Years of Experience' : 0
    });

    const statImages = [
        StatPhoto1,
        StatPhoto2,
        StatPhoto3
    ];
    
    useEffect( () => {

        const fetchStats = async () => {
            const docRef = doc(db, 'site_data', 'stats');
            const docSnap = await getDoc(docRef);

            const years_of_experience = docSnap.data()['years_of_experience'];
            const num_of_customers = docSnap.data()['num_of_customers'];
            const claims_successful = docSnap.data()['claims_successful'];
            const claims_failed = docSnap.data()['claims_failed'];

            const claim_success_rate = ((claims_successful)/(claims_successful + claims_failed))*100;

            setStats({
                "Claim Success Rate" : Math.floor(claim_success_rate),
                "Years Of Experience" : years_of_experience,
                "Satisifed Customers" : num_of_customers
            });
        }
        fetchStats();
    }, []);

    return(
        <div className="home" id='home'>
            <div className="content">
                <div className="title-home">
                    <div id='title1'>Covered for life’s twists.</div>
                    <div id='title2'>Free for life’s thrills.</div>
                </div>
                <div className='hero-text-wrapper'>
                    <span className='hero-text1'>
                        Welcome to Insurance Adda — your one-stop destination for trusted LIC & Star Health insurance plans. We simplify the process so you can focus on what truly matters : 
                    </span>
                    <span className='hero-text2'> Living Carefree</span>
                </div>
            </div>
            <div className='banner'>
                { Object.entries(stats).map(([key, value], index) => (
                    <StatBar key={index} statData={value} statField={key} imagePath={statImages[index]}/>
                )) }
            </div>
        </div>
    );
}

function StatBar({statData, statField, imagePath}){

    return(
        <div className='stat-component'>
            <img src = {imagePath} alt={statField} />
            <div className='hero-text'> {statData}{statField === 'Claim Success Rate' ? '%' : '+'} {statField} </div>
        </div>
    )
}
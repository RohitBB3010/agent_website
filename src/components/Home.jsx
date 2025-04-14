import './Home.css';
import BannerPhoto1 from '../assets/banner/banner-photo1.jpg';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { app } from '../firebase.js';

export default function Home() {
    let years_of_experience = 0, number_of_customers = 0, claim_success_rate = 0;
    const [stats, setStats] = useState({
        claims_successful : 0,
        claims_failed : 0,
        number_of_customers : 0,
        years_of_experience : 0
    });
    
    useEffect( () => {

        const fetchStats = async () => {
            const db = getFirestore(app);
            const docRef = doc(db, 'site_data', 'stats');
            const docSnap = await getDoc(docRef);

            setStats(docSnap.data());

            console.log(stats);
        }

        fetchStats();
    }, []);

    return(
        <div className="home">
            <div className="content">
                <div className="title-home">
                    <div id='title1'>Insure Smart. </div>
                    <div id='title2'>Live Bold</div>
                </div>
                <div className='hero-text1'>
                Welcome to Insurance Adda — your one-stop destination for trusted LIC & Star Health insurance plans. We simplify the process so you can focus on what truly matters : 
                </div>
                <div className='hero-text2'> Living Carefree</div>
            </div>
            <div className='banner'>
                <div className='banner-art'>
                    <img src={BannerPhoto1} alt='banner-photo1' className='banner-photo1'></img>
                    <p className='text-box'> At Insurance Adda, we don’t just sell policies — we protect dreams, safeguard futures, and stand by you when it matters most.</p>
                </div>
                <div className='banner-stats'>
                    <ul>
                        <li id='stat'>{ stats['years_of_experience'] } +</li>
                        <li> Years Of Experience </li>
                    </ul>
                    <ul>
                        <li id='stat'>{ stats['num_of_customers'] } +</li>
                        <li> Happy Customers!!! </li>
                    </ul>
                    <ul>
                        <li id='stat'>{
                            stats.claims_successful + stats.claims_failed > 0 
                            ? (stats.claims_successful / (stats.claims_successful + stats.claims_failed) * 100).toFixed(2) + " %"
                            : "N/A"
                        } +</li>
                        <li> Years Of Experience </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
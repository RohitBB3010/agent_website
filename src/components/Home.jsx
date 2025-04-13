import './Home.css';
import BannerPhoto1 from '../assets/banner/banner-photo1.jpg';
import BannerPhoto2 from '../assets/banner/banner-photo2.jpg';
import BannerPhoto3 from '../assets/banner/banner-photo3.jpg';

export default function Home() {

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
                <ul className='banner-stats'>
                    <li> 20+ Years Of Experience</li> 
                </ul>
            </div>
        </div>
    );
}
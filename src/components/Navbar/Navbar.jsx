import './Navbar.css';

export default function Navbar(){

    return(
        <div className='navbar-container'>
            <div className="navbar-left"> 
                <img src='/logo.png' alt='Logo' />
                <div className='title'>
                    <span id='insurance'>Insurance</span>
                    <span id='adda'>Adda</span>
                </div>
            </div>
            <ul className="navbar-right">
                <li> <a href='#home'> Home </a></li>
                <li> <a href='#plans'> Plans </a></li>
                <li> <a href='#testimonials'> Testimonials </a></li>
                <li> <a href='#faqs'> FAQs </a></li>
                <li> <a href='#contact'> Contact Us </a></li>
            </ul>
        </div>   
    );
}
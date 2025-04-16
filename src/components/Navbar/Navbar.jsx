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
                <li> Home </li>
                <li> Plans </li>
                <li> Testimonials </li>
                <li> FAQs </li>
                <li> Contact Us </li>
            </ul>
        </div>   
    );
}
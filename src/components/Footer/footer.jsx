import React from 'react'
import './footer.css'

import Button from 'react-bootstrap/Button';
import FacebookLogo from '../../images/facebook.png'
import InstagramLogo from '../../images/instagram.png'
import TwitterLogo from '../../images/twitter.png'
/**
 * TO-DO
 * ICONS
 * Array & Map function
 */
function Footer() {
    return (
        <div class='footer-container'>
            <div class='footer-signup'>
                <h2 class='newsletter'>NEWSLETTER SIGN-UP</h2>
                <input class='newsletter' name='email' type='email' placeholder='Enter your email' required/>
                <Button class='newsletter' variant="success">Subscribe</Button>
            </div>
            <div class='footer-social'>
                <h2 class='social-heading'>CONNECT WITH US</h2>
                <img src={FacebookLogo} class='logo' alt='facebook'/>
                <img src={InstagramLogo} class='logo' alt='instagram'/>
                <img src={TwitterLogo} class='logo' alt='twitter'/>
            </div>
        </div>
    )
}


export default Footer
import React from 'react'
import GetAppIcon from '@mui/icons-material/GetApp';
import './footer.css'
import playstore from '../images/game.png'
import iosstore from '../images/app.png'
function footer() {
    return (
        <footer>
  
         <div className="midFooter">
         <h1 className="Ha">TorioxLead</h1>
        <p>High Quality is our first priority</p>
        <p>100k people liked our services</p>
        <p>Copyrights 2023 &copy; Toriox</p>
         </div>
         <div className="midFooter">
         <h1 className="Ha">Services</h1>
        <p>SEO Services</p>
        <p ><a href="/start">Portal</a></p>
        <p>Chatbots and Live Chat</p>
         </div>
         <div className="rightFooter">
         <h4>Follow Us</h4>
         
         <a href="https://www.instagram.com/itz_sahid.ansari/">Instagram<br></br></a>
        <a href="http://youtube.com">Youtube</a><br></br>
        <a href="http://facebook.com/">Facebook</a>
         </div>
        </footer>
    );
}

export default footer

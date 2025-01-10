import React from 'react'
import LeadPortal from './LeadPortal'
import { Fragment } from 'react'
import './Home.css'
import Nav from './Nav'
import { Button } from '@mui/material'
import lead from '../images/lead2.jpg'
import { Rating } from '@mui/material'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Lakshyahome from './LakhyaHome'
import Chatbot from './chatBot'
function Home() {
    return (
       <Fragment>
           
        <Nav></Nav>
   
        <div class="context">
        <div className="homeContainer">
            <div className="box">
                    <div className="heading">
                        <h1>Easy and Powerful way to
Drive Huge Results, FAST!</h1>

                    </div>
                    <div className="heading2">
                    <h3>
See why over 1,000,00 people joined TorioxLead last year
Meet some of the 16,000 sales teams that move business forward with TorioxLead.
</h3>
                    </div>
                    <div>
                   <Link to="/login"><Button variant="contained">Sign up Free</Button></Link> 
                    </div>
                    <div className='rating'>
                        <h3>Rating 4.5</h3>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    </div>
                    
            </div>
            <div className="imageBox">
              <img src={lead} alt="" />
            </div>
            
         </div>
    </div>

    <Chatbot/>
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
         
       <Lakshyahome />
       <Footer />
       </Fragment>
    )
}

export default Home

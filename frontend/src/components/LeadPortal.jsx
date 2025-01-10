import React, { useEffect } from 'react'
import {gapi} from 'gapi-script'
import Login from './Login'
import Logout from './Logout'
const clientId="951484766563-lfmsd1f0sksgli8d5nnrk9nln1g8rh8f.apps.googleusercontent.com"
function LeadPortal() {
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        }
        gapi.load('client:auth2',start);
    })
    return (
        <div>
        
            <Login />
          
        </div>
    )
}

export default LeadPortal

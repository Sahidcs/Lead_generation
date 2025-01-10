import React from 'react'
import Sidebar from './Sidebar'
import Middle from './Middle'

import './Portal.css'
import AddToList from './AddToList'
function Portal() {
    return (
        <>
        <div className="portal">
        <Sidebar />
        <AddToList />
        <Middle />

        </div>
        
       
        </>
    )
}

export default Portal


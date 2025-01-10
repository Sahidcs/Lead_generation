import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Tooltip } from '@mui/material';
import AddToList from './AddToList';
function Sidebar() {
    return (
      <>
      <div className="sidebar">
        <div className="sidebarBox">
      
            <div>
                <a href="/">
            <Tooltip title="Home">
            <HomeIcon />
            </Tooltip>
            </a>
            </div>
           
            <div>
            <a href="/send">

                <Tooltip title="engage">
                <SendIcon />
                </Tooltip>
                </a>
            </div>
            <div>
                <a href="/chat">
                <Tooltip title="conversation">
                <ChatBubbleOutlineIcon/>
                </Tooltip>
                </a>
            </div>
        
        </div>
      </div>
      </>
    )
}

export default Sidebar

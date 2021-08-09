import {
  Language,
  NotificationsNoneOutlined,
  Settings,
} from '@material-ui/icons'
import React from 'react'
import './topbar.css'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logo">admin</div>
        </div>
        <div className="topRight">
          <div className="topbarIconscContainer">
            <NotificationsNoneOutlined />
            <span className="topIconbag">2</span>
          </div>
          <div className="topbarIconscContainer">
            <Language />
            <span className="topIconbag">2</span>
          </div>
          <div className="topbarIconscContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}

export default Topbar

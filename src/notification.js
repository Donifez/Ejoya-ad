import React, { Component } from "react";
import Reload from "./images/reload.svg";
import Search from "./images/search.svg";
import Ellipse from "./images/Ellipse.svg";
import Group_bell from  "./images/Group.svg";
import E_copy from "./images/E_Copy.svg";
import './scss/components/_notification.scss';
import MessageDetail from'./scss/components/MessageDetail';


class Notification extends Component {
  render() {
   
    return (
     <div className="notification_wrapper">
      
      <div className="notification_mainpage">
      <div className="top_mainpage">
      <p className="notifications">Notifications</p>
      <img className="Group" src={Group_bell} alt="bell"/>
      <button>Back to Home</button>
      </div>
      </div>
      <div className="notification_body">
      <div className="functionalities">

      <div className="left-top">
      <img className="reload" src={Reload} alt="reload"/>
      <p className="notify">2 unread</p>
      </div>
   
       <div className="right-top">
       <p><img className="search"src={Search} alt="search"/>
        <input type="text" className="input" value="" placeholder="Search"/>
        </p>
       </div>
      
       </div>
      
        <div className="messages">
        <img className="Ellipse" src={Ellipse} alt="eclipse"/>
        <img className="E_copy" src={E_copy} alt="ecopy"/>
        
        <p className="team"><span>Ejoya team</span> sent a message</p>
        <p className="time">10:40am Today</p>
        <p className="advancement">Congratulations Jordan your single has reached a 1,000 streams</p>
      
        </div>
        <MessageDetail/>
        <div className="messages">
        <img className="Ellipse" src={Ellipse} alt="eclipse"/>
        <img className="E_copy" src={E_copy} alt="ecopy"/>
        
        <p className="team"><span>Ejoya team</span> sent a message</p>
        <p className="time">10:40am Today</p>
        <p className="advancement">Congratulations Jordan your single has reached a 1,000 streams</p>
      
        </div>
        <MessageDetail/>
        <MessageDetail/>
      
      </div>
      

     </div>
     
    
    );
  }
}


export default Notification;

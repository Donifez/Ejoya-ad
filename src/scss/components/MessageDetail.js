import React from "react";
import Ellipse from "../../images/Ellipse.svg";
import E from "../../images/E.svg";

const MessageDetail=()=>{
    const backGround={
        background:"white",
    }
return(
    <div style={backGround}className="messages">
    <img className="Ellipse" src={Ellipse} alt="eclipse"/>
    <img className="E_copy" src={E} alt="ecopy"/>
    
    <p className="team"><span>Ejoya team</span> sent a message</p>
    <p className="time">10:40am Today</p>
    <p className="advancement">Congratulations Jordan your single has reached a 1,000 streams</p>
   
    </div>
);
};
export default MessageDetail;
import React,{Component} from "react";
import Checkbox from "./checkboxcomp";
import "../../scss/components/__sendmail.scss";



class Send extends Component {

  render() {
    return (
      <>
  <div className="createUserWrapper">
    <h1>Send Mail to Users</h1>
    <div className="notif-form-wrapper">
    
  <div className="form-content-wrapper">
        <label className="notif-form-text"> From </label>
           <select>
               <option>User</option>
               <option>Admin</option>
               <option>super admin</option>
           </select>
      <div className="notif-form-control">
       
<textarea name="comment" form="usrform">Enter text here...</textarea>
      </div>

      

    <div className="notif-form-control">
      
      <button className="form-btn" > Notify</button>
      </div>
  </div>
  <div className="form-content-wrapper controlled-form">
      <div className="notif-form-control">
        <label className="notif-form-text-area"> Quick Search User</label>
        <textarea name="comment" form="usrform">Enter text here...</textarea>
      </div>
      <div className="notif-check-control">
          <Checkbox />
      </div>
  </div>
  </div>
	</div>			
  

</>
    );
  }
}

export default Send;




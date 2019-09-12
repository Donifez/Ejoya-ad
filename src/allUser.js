import React, { Component } from "react";
import './scss/components/__alluser.scss';
import Image from "./images/sidebar_image.png";
import Logo from "./logo/ejoya-logo.png";
import Singing from "./images/sidebar_image.png";


class AllUser extends Component {
  render() {
   
    return (
     
      <div className="music_monitor_wrapper">

           
       
          
              <div className="Alluser-activity-wrapper">
                <h2> All Users (3200) </h2>
                <input type="text" value="" className="search" placeholder="Search Users"></input>  
            </div>
           
    
         


          <div >
  <table>
    <tr>
      <th></th>
      <th>USERS</th>
      <th>REG DATE</th>
      <th>TRACKS</th>
      <th>RPU</th>
      <th>REGION</th>
      <th>CPs</th>
    
    </tr>
    <tr>
      <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td>IMAGE</td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td>IMAGE</td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td>IMAGE</td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td>IMAGE</td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td>IMAGE</td>
    </tr>
  </table>
</div>

          
     
   </div>
    
    );
  }
}


export default AllUser;

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
      <th className="head"></th>
      <th className="head">USERS</th>
      <th className="head">REG DATE</th>
      <th className="head">TRACKS</th>
      <th className="head">RPU</th>
      <th className="head">REGION</th>
      <th className="head">CPs</th>
    
    </tr>
    <tr>
      <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td><span class="dot"></span></td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td><span class="dot"></span></td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td><span class="dot"></span></td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td><span class="dot"></span></td>
    </tr>
    <tr>
    <td><img className="side" src={Image}/></td>
      <td><span>Artist Name</span></td>
      <td>Sept 18,2018 by 2:10PM</td>
      <td>20</td>
      <td>$4000</td>
      <td>Adelaide, Australia</td>
      <td ><span class="dot"></span></td>
    </tr>
  </table>
</div>

          
     
   </div>
    
    );
  }
}


export default AllUser;

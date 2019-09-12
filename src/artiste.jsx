import React, { Component } from "react";
import "./scss/components/artiste.scss";
import { FaCaretDown, FaUser } from "react-icons/fa";
import Carousel from "./carousel";

class Artiste extends Component {
  render() {
    return (
      
        <div className="container-wrapper">
          <div className="user-artiste-info-wrapper">
            <div className="user-artiste-info-container">
              <div className="user-artiste-info-image">
                <img
                  src="inspect/music-bg.png"
                  alt="Atiste"
                  className="info-image"
                />
              </div>
              <div className="user-artiste-info-details">
                <h2>Artiste Name </h2>
                <p>artiste@email.com</p>
              </div>
            </div>
            <button className="artise-button">View on Music Monitor</button>
          </div>
          <div className="activity-wrapper">
          <div className="user-activity-container">
             <div className="user-activity-box">
              <h2>44K</h2>
              <p>Streams</p>
              <small>
                Last Week <FaCaretDown className="caret" />
              </small>
            </div>

            <div className="user-activity-box">
              <h2>10</h2>
              <p>New Fans</p>
              <small>
                Last Week <FaCaretDown className="caret" />
              </small>
            </div>

            <div className="user-activity-box">
              <div className="apple-circle" />
              <p>Apple Music</p>
              <small>
                Best Performing Platform 
              </small>
            </div>

            <div className="user-activity-box">
              <div className="artist-img">
              <FaUser className="artiste-avatar" />
                 {/* <img src="inspect/avatar2.png" alt="Artist Name"  />  */}
              </div>
              <small>
                Most Streamed <FaCaretDown className="caret" />
              </small>
            </div> 
            <Carousel/>
          </div>
          <div className="activity-section-container">
          
            <div className="user-activity-wrapper">
                <h2> User Activity </h2>
                <button className="activity-button">View Artist’s Activity</button>   
            </div>
            <div className="activity-table" >
            <table>
             <tr> 
               <th className="header">Description</th> <th className="header">Date & Time</th>  <th className="header">Region</th> <th className="header">CPS</th> 
               </tr>
             <tr>
               <td> 
                 <strong>Artist Name </strong>  uploaded a song</td> 
                 <td>Sep 18, 2018 by 2:10AM</td> <td>Adelaide, Australia</td> <td> <div className="cps-circle"></div></td> 
              </tr>
              <tr>
               <td> 
                 <strong>Artist Name </strong>  uploaded a song</td> 
                 <td>Sep 18, 2018 by 2:10AM</td> <td>Adelaide, Australia</td> <td> <div className="cps-circle"></div></td> 
              </tr>
              <tr>
               <td> 
                 <strong>Artist Name </strong>  uploaded a song</td> 
                 <td>Sep 18, 2018 by 2:10AM</td> <td>Adelaide, Australia</td> <td> <div className="cps-circle"></div></td> 
              </tr>
              <tr>
               <td> 
                 <strong>Artist Name </strong>  uploaded a song</td> 
                 <td>Sep 18, 2018 by 2:10AM</td> <td>Adelaide, Australia</td> <td> <div className="cps-circle"></div></td> 
              </tr>
              <tr>
               <td> 
                 <strong>Artist Name </strong>  uploaded a song</td> 
                 <td>Sep 18, 2018 by 2:10AM</td> <td>Adelaide, Australia</td> <td> <div className="cps-circle"></div> </td> 
              </tr>
            </table>
            </div>
          </div>
         
        </div>
        </div>
      
    );
  }
}
export default Artiste;

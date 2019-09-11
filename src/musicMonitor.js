import React, { Component } from "react";
import './scss/components/__musicmonitor.scss';
import Image from "./images/sidebar_image.png";
import Logo from "./logo/ejoya-logo.png";
import Singing from "./images/sidebar_image.png";
// import Sound from "./icons/sound_icon.svg";
import Allusercomp from "../src/scss/components/Alluserscomp";

class MusicMonitor extends Component {
  render() {
   
    return (
     
      <div className="music_monitor_wrapper">

           
        <div className="top_page">
      
          <p className="All_users">All Users (3200)</p>
   
          <input type="text" value="" className="search" placeholder="Search Users"></input>
           
    
          </div>
          <div className="allusers_table">
             <div className="header"><p className="users_header">Users</p> <p className="reg_date_header">REG DATE</p> <p className="tracks_header">TRACKS</p> <p className="rpu-header">RPU</p> <p className="region_header">REGION</p> <p className="ups_header">CPS</p>
             </div> 
        <div className="details"><p className="artist"><img className="art_img" src={Image}/><strong>ArtistName </strong></p><p className="date">Sep18,2018by 2:10am</p><p className="no_of_tracks">20</p> <p className="rpu" id="rp"><span>$4000</span></p> <p className="region" id="rg"><span>Adelaide,Australia</span></p><p className="image" id="img"><span>IMAGE</span></p></div>
        <Allusercomp/>
        <div className="details2"><p className="artist"><img className="art_img" src={Image}/><strong>ArtistName </strong></p><p className="date">Sep18,2018by 2:10am</p><p className="no_of_tracks">20</p> <p className="rpu" id="rp"><span>$4000</span></p> <p className="region" id="rg"><span>Adelaide,Australia</span></p><p className="image" id="img"><span>IMAGE</span></p></div>

        <div className="details3"><p className="artist"><img className="art_img" src={Image}/><strong>ArtistName </strong></p><p className="date">Sep18,2018by 2:10am</p><p className="no_of_tracks">20</p> <p className="rpu" id="rp"><span>$4000</span></p> <p className="region" id="rg"><span>Adelaide,Australia</span></p><p className="image" id="img"><span>IMAGE</span></p></div>

        <div className="details4"><p className="artist"><img className="art_img" src={Image}/><strong>ArtistName </strong></p><p className="date">Sep18,2018by 2:10am</p><p className="no_of_tracks">20</p> <p className="rpu" id="rp"><span>$4000</span></p> <p className="region" id="rg"><span>Adelaide,Australia</span></p><p className="image" id="img"><span>IMAGE</span></p></div>
       </div>
         
          
     
   </div>
    
    );
  }
}


export default MusicMonitor;

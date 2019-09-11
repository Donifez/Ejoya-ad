import React from "react";
import { relative } from "path";
// import Ellipse from "../../images/Ellipse.svg";
// import E from "../../images/E.svg";
// import Image from ";
import "./Alluser.scss";
import Image from "../../images/sidebar_image.png";

const Allusercomp=()=>{
    
   
return(
    <div className="details1"><p className="artist"><img className="art_img" src={Image}/><strong>ArtistName </strong></p><p className="date">Sep18,2018by 2:10am</p><p className="no_of_tracks">20</p> <p className="rpu" id="rp"><span>$4000</span></p> <p className="region" id="rg"><span>Australia</span></p><p className="image" id="img"><span>IMAGE</span></p></div>
);
};
export default Allusercomp;
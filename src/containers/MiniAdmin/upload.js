import React,{Component} from "react";
import "../../scss/components/__upload.scss";

class Upload extends Component {
  
    render(){
      
        return(
          
                <div className="upload-wrapper">
                
                  <div  className="Selectusers">
                 
                  <h1>Upload Track</h1>
                  <form className="form1">
                  <label>Select User</label>
                  <select name="Select Users">
                    <option value="fiat">User Premium</option>
                    <option value="audi">User Regular</option>
                </select>
                <br></br>
                 <label>Upload a track</label>
                <input type="file" name="pic" accept="music/*"/>
               

                 <label>Select Cover art</label>
                <input type="file" name="pic" accept="music/*"/>
             
                <label>UPC CODE</label>
                <input type="text" name="UPC"/> 

                <label>IRC CODE</label>
                <input type="text" name="UPC"/> 

               
                     </form>
                  </div>
                  <div className="Selectusers2">
                     <form className="form2">

                     <label>What is your stage name</label>
                    <input type="text" name="song"/> 

                     <label>What is the name of the song you are releasing</label>
                    <input type="text" name="song"/> 
                    <label>What is the name of your label</label>
                    <input type="text" name="song"/>

                    <label>What stores would you like your music to be distributed to?</label>
                    <select name="Select Users">
                    <option value="fiat">Tidal</option>
                    <option value="audi">Apple music</option>
                    <option value="fiat">Spotify</option>
                    <option value="audi">Deezer</option>
                    <option value="audi">All</option>
                </select>

                <label>Does this song contain explicit content</label>
                    <select>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    </select>

                    
                     </form>
                  </div>
                  <button className="submit">Submit</button>
                </div>
        )
    }

};

export default Upload;
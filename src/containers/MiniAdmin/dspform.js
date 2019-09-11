import React,{Component} from "react";
import "../../scss/components/__dsp.scss";

class DSP extends Component {
  
    render(){
      
        return(
            <center>
                <div className="dsp_wrapper">

                <div className="choose">
                <label> Select Users</label>
                <select>
                    <option value="volvo">USER1</option>
                    <option value="saab">USER2</option>
                    <option value="mercedes">USER3</option>
                    <option value="audi">USER4</option>
                </select>
                </div>
                <div className="upload">
                <label>DSP Data</label>
                <input type="file" name="pic" accept="music/*"/>
               

                </div>
                 <button className="submit_button">Submit</button>
                </div>
                </center>
        )
    }

};

export default DSP;
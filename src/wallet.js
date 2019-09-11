import React, { Component } from "react";
import Chart from "./Chartwallet";
import './scss/components/_wallet.scss';
import Group from "./images/Group.svg";
import Head from "./images/head.svg";

// import InfoDetail from'./scss/components/InfoDetail';


class Wallet extends Component {
    render() {
     
      return (
          <div className="wallet_wrapper">
          <div className="wallet_top">
             < div className = "wallet_name" > <p> Your Wallet </p>
              </div>
          
             < div className="wallet_button" >
              < img className="button2" src={Head} alt />
                 < img className ="button1" src = {Group} alt />

                
                   < button className ="back_home" >Back to Home </button>
             </div>


            < div className="current_balance" >
             <p> Current Balance </p> 
            </div>

            < div className="profile_settings" >
              < button className="profile_settings_button"><p> Profile Settings </p> <p> Sign Out </p></button>
            </div>

         

          </div>

          < div className="second_layer">
          

          < div className="balance" >
            <p> $13,856</p>
          </div>
       
          < div className="wallet_button" >
            < button className="withdraw_button" >Withdraw </button>
          </div>

          < div className="Royalties_Tracker" >
            <p> Royalties Tracker </p>
              <p className="total_revenue"> Total Revenue </p> 
              <p className="total_revenue"> $6500 </p> 
          </div>

          </div>

          < div className="bottom">

            < div className="Header" >
              <p className="bottom_header"> Transaction History </p>
              <select className="bottom_filter"> <option>Filter
                </option> </select> 
            </div>
      

            <div className="Table">
              <table>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reference no</th>
                  <th>Summary</th>
                </tr>
                <tr>
                  <td>7/10/2019</td>
                  <td>11:34</td>
                  <td>12426272784939483</td>
                  <td>Withdrew $10</td>
                </tr>
                <tr>
                  <td>7/10/2019</td>
                  <td>11:34</td>
                  <td>12426272784939483</td>
                  <td>Withdrew $10</td>
                </tr>
                <tr>
                  <td>7/10/2019</td>
                  <td>11:34</td>
                  <td>12426272784939483</td>
                  <td>Withdrew $10</td>
                </tr>
                <tr>
                  <td>7/10/2019</td>
                  <td>11:34</td>
                  <td>12426272784939483</td>
                  <td>Withdrew $10</td>
                </tr>
                <tr>
                  <td>7/10/2019</td>
                  <td>11:34</td>
                  <td>12426272784939483</td>
                  <td>Withdrew $10</td>
                </tr>
                <tr>
                  <td>7/10/2019</td>
                  <td>11:34</td>
                  <td>12426272784939483</td>
                  <td>Withdrew $10</td>
                </tr>
              </table>


            </div>
            <div>
              <button className="below_button">View all</button>
            </div>

            < div className="chart">
              <Chart />
              </div>
      
          </div>



       </div>
      
    );
      }
      }
      export default Wallet;
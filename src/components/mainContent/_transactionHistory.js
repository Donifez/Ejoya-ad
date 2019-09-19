import React from "react";
import "../../scss/componentStyles/_uploadHistory.scss"
import "../../scss/base/_base.scss";
import {FaArrowRight, FaCaretDown, FaMusic} from "react-icons/fa";
import Table from "./_transactionHistoryTable";

import "../../scss/abstracts/_variables.scss";

export default () => (
	
 <div className="dashboardWrapper">
          <button className="goRight">
            <FaArrowRight />/
          </button>
    <div className="dash_Heading">
      <h2>Transactions</h2>
      <button className="admin_Button">
        View Paid Royalties
      </button>
    </div>
    <div className="dashboard-card-wrap">
    <div className="dashboardcard">
      <h3>$33,082</h3>
      <h4>Total Revenue</h4>
      <button className="viewBtn">View Transaction History</button>
    </div>
    <div className="dashboardcard">
      <h3>$22,900</h3>
      <h4>Total Profit</h4>
      <button className="viewBtn">View Earning Users</button>
    </div>
    <div className="dashboardcard">
      <h3>5,000</h3>
      <h4>Paid Royalties</h4>
      <button className="viewBtn">View Royalties</button>
    </div>
    <div className="dashboardcard">
      <h3>15%</h3>
      <h4>Weekly Trans.</h4>
      
    </div>
    </div>

  
		<div className="mainContent">
				<div className="artistDetails">
          <div className="artistInfo">
            <h1 className="transactionh1">Transaction History</h1>
          </div>
          {/* <input typme="text" className="searchInput" placeholder="Search History" /> */}
          <button className="view_all">View All Transactions</button>
        </div>
        <div className="description">
          <Table/>
        </div>   
		</div>
    </div>
  
	
);
import React from "react";
import "../../scss/componentStyles/__pendingTrack.scss";
import "../../scss/base/_base.scss";
import Table from "./_pendingTrackTable.js"

import "../../scss/abstracts/_variables.scss";

export default () => (
	<>
		<div className="mainContent">
				<div className="artistDetails">
          <div className="artistInfo">
            <h1>Pending Releases(30)</h1>
          </div>
          <input type="text" className="searchInput" placeholder="Search User Activity" />
        </div>
        <div className="description">
          <Table/>
        </div>   
		</div>
	</>
);
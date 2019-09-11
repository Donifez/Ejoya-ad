// import React from 'react';
// // // // import ArtistPage from "./artistPage.js";
// // // import Notification from "./notification";
// // // // import Wallet from "./wallet";
// // // // import Table from "./components/mainContent/_pendingTrack";
// // // // import User from "./components/mainContent/_adminUserActivity";
// // // // import AllUser from "./allUser";

//  export default () => (
// 	<>
// 	 <div>
// // 	{/* <Notification/> */}
// // 	<Wallet/>
// // 	{/* <ArtistPage/> */}
// // 		{/* <Table/> */}
// // 		{/* <User/> */}
// // 		{/* <AllUser/> */}
// // 		</div>
// 	</>
// ); 


import React from 'react';
import Home from './containers/Dashboard';
import Miniadmin from "./containers/MiniAdmin";
// import Wallet from "./wallet";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default () => (
	<Router>
	<Route exact path ="/" component={Home} />
	<Route  path="/miniadmin" component={Miniadmin} />
	</Router>
);

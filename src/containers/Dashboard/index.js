import React, { Component } from 'react';
import { NavLink,Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import { FiArrowRightCircle, FiTarget } from 'react-icons/fi';
import History from "../../components/mainContent/_transactionHistory";
import Upload from "../../components/mainContent/_adminUploadedTrack.js";
import Activity from "../../components/mainContent/_adminUserActivity.js";
import Royalties from "../../components/mainContent/_paidRoyalties";
import Pending from "../../components/mainContent/_pendingTrack";
import Catalogue from "./catalogue/index";
import Dashboard from "./main";
import UserActivity from "./users/index";
import Artist from "../../artiste";
import AllUser from ".././../allUser";
// import Miniadmin from  "../MiniAdmin/index"; 

import Burger from '../../components/Burger';

class DashBoardIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
	}

	toggleSideBar = () => {
		this.setState(({ sideBarShown }) => ({ sideBarShown: !sideBarShown }));
	};

	render() {
		const {
			match: { url },
		} = this.props;
		const { sideBarShown } = this.state;
		return (
			<Router>
			<main className={(sideBarShown && 'dashboard__mobile') || 'dashboard'}>
				<Burger toggleSideBar={this.toggleSideBar} sideBarShown={sideBarShown} />
				<section className={(sideBarShown && 'dashboard__sidebar sidebar__mobile') || 'dashboard__sidebar'}>
					<div className="ejoya-logo-box" />
					<div className="artist-box">
						<img className="artist-image" src="/inspect/Rectangle 5.png" alt="artist-profile-pic" />
						<p>Artist Name</p>
					</div>
					<NavLink to={`${url}/artist/new-release`}>
						<button className="dashboard__release heading-6 font-weight--6">
							<span className="music__icon" />
							New Release
						</button>
					</NavLink>
					<div className="dashboard__function-list">
						<NavLink
							to="/_pendingTrack"
							className="heading-6-1 font-weight--5"
							activeClassName="font-weight--8"
						>
							<span className="home" />
							pending
						</NavLink>
					
						<NavLink to="/admin_transaction_history" className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Transaction history
						</NavLink>
						<NavLink to="/admin_users_activity" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Users Activity
						</NavLink>
						<NavLink to="/admin_paid_royalties" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Paid Royalties
						</NavLink>

						<NavLink to="/admin_uploaded_tracks" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Uploaded tracks
						</NavLink>
						<NavLink to="/catalogue" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Catalogue
						</NavLink>
						{/* <NavLink to="/dashboard" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Dashboard
						</NavLink> */}
						<NavLink to="/users" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Users
						</NavLink>


						<NavLink to="/artiste" className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Artist
						</NavLink>
						<NavLink to="/allUser" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Alluser
						</NavLink>
						{/* <NavLink to={`${url}/artist/marketing-page`} className="signout-btn heading-6-1 font-weight--5">
							<FiTarget className="signout" />
							Market
						</NavLink> */}
						{/* <NavLink to={`${url}/artist/marketing-page`} className="mini-admin">
						Mini-admin

						</NavLink> */}
						<div
							className="signout-btn heading-6-1 font-weight--5"
							onClick={() => {
								localStorage.removeItem('AUTH_TOKEN');
							}}
						>
							<FiArrowRightCircle className="signout" />
							Sign Out
						</div>
					</div>
				</section>
				<section
					className={
						(sideBarShown && 'dashboard__content  dashboard__content--mobile') || 'dashboard__content'
					}
					onClick={() => {
						if (this.state.sideBarShown) {
							this.setState({ sideBarShown: false });
						}
					}}
				>
					 <div>
				
						<Switch>
					<Route exact path="/"  component={Dashboard}/>
					<Route  path="/_pendingTrack"  component={Pending}/>
					
					<Route  path="/artiste"  component={Artist}/>
					<Route  path="/admin_transaction_history"  component={History}/>
					<Route  path="/admin_users_activity"  component={Activity} />
						<Route  path="/admin_paid_royalties"  component={Royalties} />
						<Route  path="/admin_uploaded_tracks"  component={Upload} />
						<Route   path="/catalogue"  component={Catalogue} />
						<Route   path="/users"  component={UserActivity} />
						<Route   path="/allUser"  component={AllUser} />
					</Switch>
	             
					</div> 
				</section>
			</main>
			</Router> 
		);
	}
}

export default DashBoardIndex;

import React, { Component } from 'react';
import { NavLink,Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import { FiArrowRightCircle, FiTarget } from 'react-icons/fi';
import Pending from "../../components/mainContent/_pendingTrack";
import Notification from "../../notification"; 
import Wallet from "../../wallet";
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
						<NavLink to="/notification"className="heading-6-1 font-weight--5">
							<span className="fans" />
							Notification
						</NavLink>
						<NavLink to="/wallet" className="heading-6-1 font-weight--5">
							<span className="team" />
							wallet
						</NavLink>
						<NavLink to="/artiste" className="heading-6-1 font-weight--5">
							<span className="wallet" />
							Artist
						</NavLink>
						<NavLink to="/allUser" className="heading-6-1 font-weight--5">
							<span className="setting" />
							Alluser
						</NavLink>
						<NavLink to={`${url}/artist/marketing-page`} className="signout-btn heading-6-1 font-weight--5">
							<FiTarget className="signout" />
							Market
						</NavLink>
						<NavLink to={`${url}/artist/marketing-page`} className="mini-admin">
						Mini-admin

						</NavLink>
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
					<Route exact path="/"  component={AllUser}/>
					<Route  path="/_pendingTrack"  component={Pending}/>
					<Route path="/notification"  component={Notification}/>
					<Route  path="/wallet"  component={Wallet}/>
					<Route  path="/artiste"  component={Artist}/>
					</Switch>
	             
					</div> 
				</section>
			</main>
			</Router> 
		);
	}
}

export default DashBoardIndex;

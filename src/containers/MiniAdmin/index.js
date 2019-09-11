import React, { Component } from 'react';
import { NavLink,Route,BrowserRouter as Router } from 'react-router-dom';

import { FiArrowRightCircle, FiTarget } from 'react-icons/fi';
// import Upload from "./upload";
// import Send from "./Sendmail";
import DSP from "./dspform";

// import Pending from "../../components/mainContent/_pendingTrack";
// import Notification from "../../notification"; 
// import Wallet from "../../wallet"; 
// import ArtistPage from "../../artistPage"; 
import AllUser from ".././../allUser";

import Burger from '../../components/Burger';

class Miniadmin extends Component {
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
			<main className={(sideBarShown && 'dashboard__mobile') || 'dashboard'}>
				<Burger toggleSideBar={this.toggleSideBar} sideBarShown={sideBarShown} />
				<section className={(sideBarShown && 'dashboard__sidebar sidebar__mobile') || 'dashboard__sidebar'}>
					<div className="ejoya-logo-box" />
					<div className="artist-box">
						<img className="artist-image" src="/inspect/Rectangle 5.png" alt="artist-profile-pic" />
						<p>Mini-admin</p>
					</div>
					<NavLink to={`${url}/artist/new-release`}>
						<button className="dashboard__release heading-6 font-weight--6">
							<span className="music__icon" />
							Create User
						</button>
					</NavLink>
					<div className="dashboard__function-list">
						<NavLink
							to="./upload"
							className="heading-6-1 font-weight--5"
							activeClassName="font-weight--8"
						>
							<span className="home" />
							Upload
						</NavLink>
						<NavLink to={`${url}/artist/fan-page`} className="heading-6-1 font-weight--5">
							<span className="fans" />
						Send email
						</NavLink>
                        <NavLink to={`${url}/artist/wallet-page`} className="heading-6-1 font-weight--5">
							<span className="wallet" />
						Send Notification
						</NavLink>
						<NavLink to={`${url}/artist/settings-page`} className="heading-6-1 font-weight--5">
							<span className="setting" />
							Dashboard
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
					{/* <div>

					<Router>
                    <Route exact to="/upload"  component={Upload}/>
	              </Router>
					</div> */}
{/* 
                    <Upload/>  */}
                    {/* <Send/> */}
                    <DSP/>
				</section>
			</main>
		);
	}
}

export default Miniadmin;

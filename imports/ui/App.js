import React, {Fragment} from 'react';
import FxDefaultLayout from './Layout/DefaultLayout.js';
import Home from './Pages/Home.js';
import LoginForm from './Pages/Login.js';
import RegisterForm from './Pages/Register.js';
import { useTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
Session.setDefault('dark', false)
Session.setDefault('skip', 0)
Session.setDefault('limit', 2)
Session.setDefault('tweets', [])
function App() {
	const user = useTracker(() => Meteor.user());
	return ( 
	<div className = "d-flex flex-column w-100 vh-100" >
		<FxDefaultLayout>
		<Router>
				{user ?
				<Fragment>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">

						</Route>
						<Route path="/dashboard">
							
						</Route>
					</Switch>
				</Fragment>
					:
					<Switch>
						<Route path="/">
							<RegisterForm/>
						</Route>
						<Route path="/Login">
							<LoginForm/>
						</Route>
						<Route path="*">
							<LoginForm/>
						</Route>
					</Switch>
				}
		</Router>
		</FxDefaultLayout> 
	</div>
	)
}

export default App;
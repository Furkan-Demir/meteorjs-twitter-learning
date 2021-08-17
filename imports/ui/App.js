import React from 'react';
import FxDefaultLayout from './Layout/DefaultLayout.js';
import { useTracker } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'

Session.setDefault('dark', false)
Session.setDefault('tweets', [])
Session.setDefault('limit', 5)
Session.setDefault('select', false)

Session.setDefault('focusedTweets', [])
Session.setDefault('focusedLimit', 5)
Session.setDefault('selectedTweet', {})
Session.setDefault('selectedTweetId', "")

function App(props) {
	const user = useTracker(() => Meteor.user());
	return ( 
	<div className = "d-flex flex-column w-100 vh-100" >
		<FxDefaultLayout>
			{props.content}
		</FxDefaultLayout> 
	</div>
	)
}

export default App;
import React, { useState, useEffect } from 'react'
import { showMore } from '../../api/Tweets/index.js'
import Tweet from '../Components/Tweet.js'
import TypeTweet from '../Components/TypeTweet'
import { useTracker } from 'meteor/react-meteor-data';

function Home() {
        Session.set('select',false)
        var tweets = useTracker(()=> Session.get('tweets'));
        var _limit = useTracker(()=> Session.get('limit'));
        var user = useTracker(()=> Meteor.user());
        var settings = {
            parent: "0",
            limit: _limit,
            select: false
        }
        Session.set('select',false)
        return (
            <div className="d-flex flex-column flex-fill">
                {
                    user 
                    ?
                    <TypeTweet parent="0"/>
                    :
                    <></>
                }

                {                
                    tweets.map((item,key) => 
                        {
                            return (
                                <Tweet item={item} key={key} />
                            )
                        }
                    )
                }
                <button className="btn btn-primary text-white my-3" onClick={() => showMore(settings)}>Load More</button>
            </div>
        )
    
}
export default Home;
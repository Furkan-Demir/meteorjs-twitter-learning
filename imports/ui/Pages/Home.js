import React, { Component } from 'react'
import { showMore } from '../../api/Tweets/index.js'
import Tweet from '../Components/Tweet.js'
import TypeTweet from '../Components/TypeTweet'
import { useTracker } from 'meteor/react-meteor-data';
const loadmore = () => {
    showMore()
    _limit = Session.get("limit")
    _skip = Session.get("skip")
    Session.set("skip",_limit)
    Session.set("limit",_limit+5)
}
function Home() {
    
        const items = useTracker(()=> Session.get("tweets"));

        return (
            <div className="d-flex flex-column flex-fill">
                <TypeTweet/>
                {                
                    items.map((item,key) => 
                        {
                            return (
                                <Tweet item={item} key={key} />
                            )
                        }
                    )
                }
                <button className="btn btn-primary text-white my-3" onClick={loadmore}>Load More</button>
            </div>
        )
    
}
export default Home;
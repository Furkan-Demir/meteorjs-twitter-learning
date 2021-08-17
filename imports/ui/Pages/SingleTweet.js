import React from 'react'
import { showMore } from '../../api/Tweets/index.js'
import Tweet from '../Components/Tweet.js'
import TypeTweet from '../Components/TypeTweet'
import { useTracker } from 'meteor/react-meteor-data';
import { selectTweet } from '../../api/Tweets/index.js'

function SingleTweet(props) {
        
            Session.set('selectedTweetId',props);
            var focusedLimit = useTracker(()=> Session.get('focusedLimit'));
            var user = useTracker(()=> Meteor.user());
            settings = {
                limit: focusedLimit,
                parent: props.props,
                select: true
            }
            
            
            useTracker(()=> selectTweet({_id : props}))
            main = useTracker(()=> Session.get('selectedTweet'));
            
            var tweets = useTracker(()=> Session.get('focusedTweets'));
            console.log(tweets);
        

        return (
            <div className="d-flex flex-column flex-fill">

                <Tweet item={main} key={main._id} />
                <div className="ps-4">

                
                {                
                    tweets.map((item,key) => 
                        {
                            return (
                                <Tweet item={item} key={key} className="border-left"/>
                            )
                        }
                    )
                }
                </div>
                <button className="btn btn-primary text-white my-3" onClick={() => showMore(settings)}>Load More</button>
                {
                    user 
                    ?
                    <TypeTweet parent={main._id}/>
                    :
                    <></>
                }

            </div>
        )
    
}
export default SingleTweet;
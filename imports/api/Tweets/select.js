import { tweetsCollection } from '../Collections/tweetsCollection'
selectTweet = (settings) =>  {
    Meteor.call('tweet.select',{
        settings
    },
    function(err,res){
            if(err){
                console.log(err);
                return [];
            }
                if (Session.get("selectedTweetId") !== res._id){
                    Session.set("selectedTweet",res)
                }
            return;
        }
    )
}
export default selectTweet;
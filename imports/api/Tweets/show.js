import { tweetsCollection } from '../Collections/tweetsCollection'
showMore = (settings) =>  {
    Meteor.call('tweet.show',{
        settings
    },
    function(err,res){
            if(err){
                console.log(err);
                return [];
            }
            console.log(settings);
            if(Session.get('select')){
                Session.set("select",settings.select)
            }else{
                Session.set("select",settings.select)

            }
            if (Session.get('select') === false){
                Session.set("limit",settings.limit+5)
                Session.set("tweets",[...res])
            }
            if (Session.get('select') === true){
                Session.set("focusedLimit",settings.limit+5)
                Session.set("focusedTweets",res)
            }         
            return;
        }
    )
}
export default showMore;
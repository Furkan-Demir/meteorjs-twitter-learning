import { tweetsCollection } from '../Collections/tweetsCollection'
function showMore() {
    _skip = Session.get("skip")
    _limit = Session.get("limit")
    console.log(_limit,_skip);
    items = tweetsCollection.find({"parent":"0"}, {skip: _skip, limit: _limit}).fetch();
    items.map(item => {
        var find_user = Meteor.users.findOne({username:item.user});
        if (find_user !== undefined){
            item.user = find_user.username;
            item.name = find_user.profile.name
            item.img = find_user.profile.img
        }
        return item
    })

    Session.set("tweets",[...items,...Session.get("tweets")])
}
export default showMore;
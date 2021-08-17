import { tweetsCollection } from '/imports/api/Collections/tweetsCollection';

Meteor.methods({
  'tweet.show': function ({ settings }) {
    console.log("limit: ",settings.limit);
      if (Meteor.userId()){
        var items = tweetsCollection.find({parent:settings.parent}, {sort:{createdAt:-1}, limit: settings.limit}).fetch()
        items.map(item => {
          var find_user = Meteor.users.findOne({username:item.user});
          if (find_user !== undefined){
              item.username = find_user.username;
              item.name = find_user.profile.name
              item.img = find_user.profile.img
          }
          return item
      })
      return items
      }
  },
  'tweet.insert': function (tweet) {
    if (Meteor.userId()){
      tweet = tweet.user;
      const item = { user: tweet._user , tweet: tweet.tweet , createdAt: tweet.createdAt , likes: tweet.likes , rt: tweet.rt , mention: tweet.mention , parent: tweet.parent  }
        tweetsCollection.insert(item)
        if(tweet.parent !== "0"){
          tweetsCollection.update({
            _id:tweet.parent
          },
          {
            $inc: {mention:1}
          })
        }
      }
  },
  'tweet.select': function ({ settings }) {
      if (Meteor.userId()){
        const selectedID = settings._id.props
        var item = tweetsCollection.findOne({_id:selectedID})
        
          var find_user = Meteor.users.findOne({username:item.user});
          if (find_user !== undefined){
              item.username = find_user.username;
              item.name = find_user.profile.name
              item.img = find_user.profile.img
          }
      return item
      }
  }
})


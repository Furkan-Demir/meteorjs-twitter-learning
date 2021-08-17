import { tweetsCollection } from '../Collections/tweetsCollection'

export default newTweet = (user, tweet, createdAt, likes, rt, mention, parent) => Meteor.call('tweet.insert', {
    user: user,
    tweet: tweet,
    createdAt: createdAt,
    likes: likes,
    rt: rt,
    mention: mention,
    parent: parent,
  })
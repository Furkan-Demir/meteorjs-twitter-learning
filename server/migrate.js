import { tweetsCollection } from '/imports/api/Collections/tweetsCollection';
migrate_all = () => {
    const SEED_USERNAME = 'fxdemir';
    const SEED_PASSWORD = '123123123';
    const SEED_NAME = 'Furkan Demir';
    seed_account = Accounts.findUserByUsername(SEED_USERNAME);
    if (!seed_account) {
      Accounts.createUser({
        username: SEED_USERNAME,
        password: SEED_PASSWORD,
        profile: {
          name: SEED_NAME,
          img: "1.png",
          fav: []
        }
      });
    }
    if(tweetsCollection.find({user : "fxdemir"}).count()){
        tweetsCollection.insert({
            user: "fxdemir",
            tweet: "Road to MeteorJS",
            date: Date.now(),
            likes: 0,
            rt: 0,
            mention: 0,
            parent: "0"
        })
    }
}
export default migrate_all;
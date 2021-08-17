import { Meteor } from 'meteor/meteor';
import { tweetsCollection } from '../Collections/tweetsCollection'


Meteor.publish('tasks', function publishTasks() {
        items = tweetsCollection.find({"parent":"0"}, {sort:{createdAt:-1}});
        items.map(item => {
            var find_user = Meteor.users.findOne({username:item.user});
            if (find_user !== undefined){
                item.user = find_user.username;
                item.name = find_user.profile.name
                item.img = find_user.profile.img
            }
            return item
        })
        return items
});
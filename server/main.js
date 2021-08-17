import { Meteor } from 'meteor/meteor';
import migrate_all from './migrate';
import '/imports/api/Tweets/pub'
import './Methods/Tweet'
Meteor.startup(() => {
    migrate_all();
});

import { Meteor } from 'meteor/meteor';
import migrate_all from './migrate';
import '/imports/api/Methods.js'
Meteor.startup(() => {
    migrate_all();
});

import { Mongo } from 'meteor/mongo';

export const tweetsCollection = new Mongo.Collection('tweets');

Meteor.methods({
    'find_by_username'(name){
      return Accounts.findUserByUsername(name);
    }
  });
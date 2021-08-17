MustSignIn = function(context, redirect, stop) {
    if(!Meteor.userId()) {
      redirect(`/login`);
      stop();
    }
  }
  
MustSignOut = function(context, redirect, stop) {
    if(Meteor.userId()) {
      redirect('/');
      stop();
    }
}
export { MustSignIn, MustSignOut }
import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    var userInfo = $.cookie('userInfo');

    if (!userInfo) {
      this.replaceWith('onboarding');
    } else {
      // TODO: Read and set user info values
      this.replaceWith('home');
    }
  }
});
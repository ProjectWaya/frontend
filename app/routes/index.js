import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    var userInfo = $.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('onboarding');
    } else {
      this.replaceWith('home')
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    var userInfo = $.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('home.onboarding');
    } else {
      this.replaceWith('home.overview')
    }
  }
});

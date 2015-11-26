import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    // TODO: Read cookie
    var isNewUser = true;

    if (isNewUser) {
      this.replaceWith('onboarding');
    } else {
      this.replaceWith('home');
    }
  }
});
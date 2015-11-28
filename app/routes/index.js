import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    debugger
    var userInfo = Ember.$.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
    } else {
      this.replaceWith('home.overview.all', { lang: this.get('i18n.locale') })
    }
  }
});

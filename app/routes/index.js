import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    var userInfo = $.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
    } else {
      this.replaceWith('home.overview.all', { lang: this.get('i18n.locale') })
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  cookieName: 'userInfo',
  country: null,
  city: null,
  role: 'asylum',

  isInfoValid: Ember.computed.and('country', 'city', 'role'),

  actions: {
    setInfo() {
      var info = {
        country: this.get('country'),
        city: this.get('city'),
        role: this.get('role')
      };

      info = JSON.stringify(info);

      $.cookie(this.get('cookieName'), info);
      this.transitionTo('index');
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('store').find('user-status');
  },
  actions: {
    updateUserInfo(userInfo) {
      this.get('controller').set('userInfo', userInfo)
    }
  }
});

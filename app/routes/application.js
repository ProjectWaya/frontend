import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('store').find('user-status');
  },
  actions: {
    didTransition: function () {
      var userInfo = $.cookie('userInfo');
      console.log("cookie");
      console.log(userInfo);
      if (userInfo) {
        var userInfoObject = JSON.parse(userInfo);
        if (userInfoObject) {
          this.get('controller').set('selectedCountry', userInfoObject.country);
          this.get('controller').set('selectedCity', userInfoObject.city);
          this.get('controller').set('selectedUserStatus', userInfoObject.userStatus);
        } else {
          this.get('controller').set('selectedCountry', null);
          this.get('controller').set('selectedCity', null);
          this.get('controller').set('selectedUserStatus', null);
        }
      } else {
        this.get('controller').set('selectedCountry', null);
        this.get('controller').set('selectedCity', null);
        this.get('controller').set('selectedUserStatus', null);
      }
    }
  }
});

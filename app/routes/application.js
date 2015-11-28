import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('store').find('user-status');
  },
  actions: {
    didTransition: function () {
      var controller = this.get('controller');
      var resetValues = function() {
        controller.set('selectedCountry', null);
        controller.set('selectedCity', null);
        controller.set('selectedUserStatus', null);
      };

      var userInfo = $.cookie('userInfo');
      if (userInfo) {
        var userInfoObject = JSON.parse(userInfo);
        if (userInfoObject) {
          controller.set('selectedCountry', userInfoObject.country);
          controller.set('selectedCity', userInfoObject.city);
          controller.set('selectedUserStatus', userInfoObject.userStatus);
        } else {
          resetValues();
        }
      } else {
        resetValues();
      }
    }
  }
});

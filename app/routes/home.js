import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    !$.cookie('userInfo') && this.replaceWith('index');
  },

  model: function(params) {
    var userInfoObject = JSON.parse($.cookie('userInfo'));
    if (!params.country) {
      params.country = userInfoObject.country;
    }

    if (!params.city) {
      params.city = userInfoObject.city;
    }

    if (!params.userStatus) {
      params.userStatus = userInfoObject.userStatus;
    }

    console.log("params", params);
    return this.get('store').find('point');
  }
});

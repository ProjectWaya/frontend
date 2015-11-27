import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    !$.cookie('userInfo') && this.replaceWith('index');
  },

  model(params) {
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

    var points = this.get('store').find('point', { city: params.city, country: params.country });
    var tags   = this.get('store').find('tag');

    return Ember.RSVP.hash({
      points: points,
      tags:   tags
    });
  },

  setupController(controller, model) {
    controller.set('model', model.points);
    controller.set('tags', model.tags);
  }
});

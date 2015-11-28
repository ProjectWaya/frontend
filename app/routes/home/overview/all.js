import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var userInfo = JSON.parse(Ember.$.cookie('userInfo'));
    var tags     = this.modelFor('home.overview');
    var points   = this.get('store').find('point', { filter: { city: userInfo.city.key }});

    return Ember.RSVP.hash({
      points: points
    });
  },

  setupController(controller, model) {
    controller.set('model', model.points);
    controller.set('pointModels', model.points);
  },

  beforeModel(transition) {
    var userInfo = Ember.$.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
    }
  }

});

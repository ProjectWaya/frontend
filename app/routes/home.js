import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var points = this.get('store').find('point');
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

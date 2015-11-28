import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var tags            = this.modelFor('home.overview').tags;
    var currentCategory = tags.findBy('categorySlug', params.categorySlug);
    var points          = this.get('store').find('point', { tag: currentCategory.get('id') });

    return Ember.RSVP.hash({
      points:          points,
      currentCategory: currentCategory
    });
  },

  setupController(controller, model) {
    controller.set('model', model.points);
    controller.set('currentCategory', model.currentCategory);
  }

});

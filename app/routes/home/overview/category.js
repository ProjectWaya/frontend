import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var tags            = this.modelFor('home.overview');
    var currentCategory = tags.findBy('categorySlug', params.categorySlug);
    var points          = this.get('store').find('point', { filter: { tag: currentCategory.get('key'), city: this.get('userInfo.city.key') }});

    return Ember.RSVP.hash({
      points:          points,
      currentCategory: currentCategory
    });
  },

  setupController(controller, model) {
    controller.set('model', model.points);
    controller.set('currentCategory', model.currentCategory);
  },

  actions: {
    willTransition() {
      this.set('invalidatedModel', false);
    },
    didTransition() {
      if (this.get('invalidatedModel') == false) {
        this.refresh();
        this.set('invalidatedModel', true);
      }
    }
  }

});

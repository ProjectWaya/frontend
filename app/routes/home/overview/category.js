import Ember from 'ember';

export default Ember.Route.extend({
  invalidatedModel: false,
  model(params) {
    var userInfo        = JSON.parse(Ember.$.cookie('userInfo'));
    var tags            = this.modelFor('home.overview');
    var currentCategory = tags.findBy('categorySlug', params.categorySlug);
    var points          = this.get('store').find('point',
      { filter: { tag: currentCategory.get('key'), city: userInfo.city.key }});


    return Ember.RSVP.hash({
      points:          points,
      currentCategory: currentCategory
    });
  },

  setupController(controller, model) {
    controller.set('model', model.points);
    controller.set('pointModels', model.points);
    controller.set('currentCategory', model.currentCategory);
  },

  beforeModel(transition) {
    var userInfo = Ember.$.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
    }
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
    },
    updatePoints(points) {
      this.get('controller').set('pointModels', points);
    }
  }

});

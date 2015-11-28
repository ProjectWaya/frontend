import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var userInfo           = JSON.parse(Ember.$.cookie('userInfo'));
    var tags               = this.modelFor('home.overview');
    var currentSubCategory = tags.findBy('subCategorySlug', params.subCategorySlug);
    var points             = this.get('store').find('point',
      { filter: { tag: currentSubCategory.get('key'), city: userInfo.city.key }});


    return Ember.RSVP.hash({
      points:          points,
      currentCategory: currentSubCategory
    });
  },

  setupController(controller, model) {
    this.send('updatePoints', model.points);
    controller.set('currentCategory', model.currentCategory);
  },

  beforeModel(transition) {
    var userInfo = Ember.$.cookie('userInfo');
    if (!userInfo) {
      this.replaceWith('home.onboarding', { lang: this.get('i18n.locale') });
    }
  }
});

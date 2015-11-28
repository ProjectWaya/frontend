import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    !$.cookie('userInfo') && this.replaceWith('index');
  },

  model(params) {
    return this.get('store').find('tag');
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('tags', model);

    var mapStubCategory = this.get('store').createRecord('tag', {
      name: 'maps'
    });

    controller.set('mapCategory', mapStubCategory)
  },

  afterModel(model, transition) {
    // this.transitionTo('home.overview.all');
  }
});

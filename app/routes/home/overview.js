import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    !Ember.$.cookie('userInfo') && this.replaceWith('index');
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

  beforeModel(transition) {
    if (this.get('routeName') === transition.targetName || 
      this.get('routeName')+'.index' === transition.targetName) {
      this.transitionTo('home.overview.all');
    }
  }
});

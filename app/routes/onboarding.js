import Ember from 'ember';

export default Ember.Route.extend({

  //TODO: extend model for cities and countries
  model() {
    return this.get('store').find('user-status');
  }
});

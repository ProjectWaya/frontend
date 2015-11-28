import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.set('i18n.locale', params.lang);
  }
});
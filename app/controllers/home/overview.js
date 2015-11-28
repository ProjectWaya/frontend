import Ember from 'ember';

export default Ember.Controller.extend({
  mainCategories: Ember.computed.filterBy('tags', 'category', 'main_category')
});

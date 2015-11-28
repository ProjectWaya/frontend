import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var tags = this.modelFor('home.overview');
    return tags.findBy('subCategorySlug', params.subCategorySlug)
  }
});

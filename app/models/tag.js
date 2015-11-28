import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name:        attr('string'),
  description: attr('string'),
  category:    attr('string'),
  sortno:      attr('number'),
  parentTag: DS.belongsTo('tag', { inverse: 'childTags' }),
  childTags: DS.hasMany('tag', { inverse: 'parentTag' }),
  className: Ember.computed('name', { 
    get() {
      return this.get('name').dasherize()
    }
  }),
  categorySlug: Ember.computed('name', { 
    get() {
      return this.get('name').dasherize()
    }
  }),
  subCategorySlug: Ember.computed.alias('categorySlug')
});
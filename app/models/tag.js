import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name:        attr('string'),
  description: attr('string'),
  category:    attr('string'),
  key:         attr('string'),
  sortno:      attr('number'),
  parentTag:   DS.belongsTo('tag', { inverse: 'childTags' }),
  childTags:   DS.hasMany('tag', { inverse: 'parentTag' }),
  className:   Ember.computed('key', { 
    get() {
      return this.get('key').camelize();
    }
  }),
  categorySlug: Ember.computed('key', { 
    get() {
      return encodeURIComponent(this.get('key').dasherize());
    }
  }),
  subCategorySlug: Ember.computed.alias('categorySlug')
});
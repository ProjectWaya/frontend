import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name:       attr('string'),
  parent:     DS.belongsTo('tag', { inverse: 'children' }),
  children:   DS.hasMany('tag', { inverse: 'parent' }),
  sortOrder: DS.attr('number')
});
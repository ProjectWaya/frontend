import DS from 'ember-data';

export default DS.Model.extend({
  iso: DS.attr('string'),
  name: DS.attr('string'),
  cities: DS.hasMany('city', {async: false})
});
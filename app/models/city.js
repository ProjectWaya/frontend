import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  key: DS.attr('string'),
  zip_code: DS.attr('string'),
  country: DS.belongsTo('country')
});
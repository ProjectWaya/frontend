import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  latitude: attr('number'),
  longitude: attr('number'),
  description: attr('string'),
  address: attr('string'),
  city: attr('string'),
  zip: attr('string'),
  country: attr('string'),
  phones: attr(),
  opening_hours: attr('string'),
  mails: attr('string'),
  webaddress: attr('string'),
  tags: DS.hasMany('tag', { async: false })
});
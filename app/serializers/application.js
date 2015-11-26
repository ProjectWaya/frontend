import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return Ember.String.underscore(attr);
  },
  keyForRelationship(rawKey) {
    return Ember.String.underscore(rawKey);
  }
});
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/en/v1'
});
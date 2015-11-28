import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: Ember.computed({
    get() {
      var locale = this.get('container').lookup('service:i18n').get('locale')
      return "/api/"+locale+"/v1";
    }
  })
});
import Ember from 'ember';

export default Ember.Controller.extend({
  selectedCountry: Ember.computed.alias('countries.firstObject'),
  cities: Ember.computed.alias('selectedCountry.cities'),
  selectedCity: Ember.computed.alias('cities.firstObject'),
  selectedUserStatus: Ember.computed.alias('userStatus.firstObject'),
  cookieName: 'userInfo',

  isValidCountry: Ember.computed.bool('selectedCountry'),
  isValidCity: Ember.computed.bool('selectedCity'),
  isValidUserStatus: Ember.computed.bool('selectedUserStatus'),

  isInfoValid: Ember.computed.and('isValidCountry', 'isValidCity', 'isValidUserStatus'),
  isInfoInvalid: Ember.computed.not('isInfoValid'),

  actions: {
    onCountrySelected(country) {
      this.set('selectedCountry', country);
    },
    onCitySelected(city) {
      this.set('selectedCity', city);
    },
    setInfo() {
      var info = {
        country: this.get('selectedCountry'),
        city: this.get('selectedCity'),
        userStatus: this.get('selectedUserStatus')
      };

      info = JSON.stringify(info);

      $.cookie(this.get('cookieName'), info);
      this.transitionTo('home.overview');
    }
  }
});

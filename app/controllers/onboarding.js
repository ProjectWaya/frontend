import Ember from 'ember';

const countries = ['France', 'Austria', 'Germany', 'Spain'];
const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux'];
const userStatus = ['Refugee', 'Asylum seeker', 'Just arrived'];

export default Ember.Controller.extend({
  countries: countries,
  cities: cities,
  userStatus: userStatus,
  selectedCountry: countries[0],
  selectedCity: cities[0],
  selectedUserStatus: userStatus[0],
  cookieName: 'userInfo',
  country: null,
  city: null,

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
        userStatus: this.get('selectedRole')
      };

      info = JSON.stringify(info);

      $.cookie(this.get('cookieName'), info);

      this.transitionTo('index');
    }
  }
});

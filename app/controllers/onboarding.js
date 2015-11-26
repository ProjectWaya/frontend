import Ember from 'ember';

const countries = ['France', 'Austria', 'Germany', 'Spain'];
const cities = ['Paris', 'Lyon', 'Marseille', 'Bordeaux'];

export default Ember.Controller.extend({
  countries: countries,
  defaultCountry: countries[0],
  cities: cities,
  defaultCity: cities[0],
  roles: ['refugee', 'asyliumSeeker', 'justArrived'],
  currentRole: 'refugee',
  cookieName: 'userInfo',
  country: null,
  city: null,
  role: 'asylum',

  isInfoValid: Ember.computed.and('country', 'city', 'role'),
  
  actions: {
    onCountrySelected() {
      console.log("selected country: " + country);
      this.set('defaultCountry', country);
    },
    onCitySelected() {
      console.log("selected city: " + city);
      this.set('defaultCity', city);
    },
    setInfo() {
      var info = {
        country: this.get('country'),
        city: this.get('city'),
        role: this.get('role')
      };

      info = JSON.stringify(info);

      $.cookie(this.get('cookieName'), info);
      this.transitionTo('index');
    }
  }
});

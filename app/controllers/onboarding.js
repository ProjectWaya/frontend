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
  actions: {
    onCountrySelected() {
      console.log("selected country: " + country);
      this.set('defaultCountry', country);
    },
    onCitySelected() {
      console.log("selected city: " + city);
      this.set('defaultCity', city);
    }
  }
});

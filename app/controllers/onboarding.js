import Ember from 'ember';

export default Ember.Controller.extend({
  countries: ['France', 'Austria', 'Germany', 'Spain'],
  cities: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
  roles: ['refugee', 'asyliumSeeker', 'justArrived'],
  currentRole: 'refugee',
  actions: {
    onCountrySelected() {
      console.log("selected country");
    },
    onCitySelected() {
      console.log("selected city");
    },
    roleChanged() {

    }
  }
});

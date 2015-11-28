import Ember from 'ember';

export default Ember.Controller.extend({
  cities:             Ember.computed.alias('selectedCountry.cities'),
  selectedCountry:    Ember.computed.reads('countries.firstObject'),
  selectedCity:       Ember.computed.reads('cities.firstObject'),
  selectedUserStatus: Ember.computed.reads('userStatus.firstObject'),
  isValidCountry:     Ember.computed.bool('selectedCountry'),
  isValidCity:        Ember.computed.bool('selectedCity'),
  isValidUserStatus:  Ember.computed.bool('selectedUserStatus'),
  isInfoValid:        Ember.computed.and('isValidCountry', 'isValidCity', 'isValidUserStatus'),
  isInfoInvalid:      Ember.computed.not('isInfoValid'),

  setSelectionsByCookie: Ember.on('init', function() {
    if (Ember.$.cookie('userInfo')) {
      var userInfo = JSON.parse(Ember.$.cookie('userInfo'));
      var store    = this.get('store');

      var selectedCountry    = store.find('country', userInfo.country.id);
      var selectedCity       = store.find('city', userInfo.city.id);
      var selectedUserStatus = store.find('user-status', userInfo.userStatus.id);

      Ember.RSVP.hash({
        selectedCountry:    selectedCountry,
        selectedCity:       selectedCity,
        selectedUserStatus: selectedUserStatus
      }).then( (response) => {
        this.set('selectedCountry', response.selectedCountry);
        this.set('selectedCity', response.selectedCity);
        this.set('selectedUserStatus', response.selectedUserStatus);
      })
    }
  }),

  actions: {
    onCountrySelected(country) {
      this.set('selectedCountry', country);
      this.set('selectedCity', country.get('cities.firstObject'))
    },
    onCitySelected(city) {
      this.set('selectedCity', city);
      this.set('selectedCountry', city.get('country'))
    },
    onUserStatusSelected(userStatus) {
      this.set('selectedUserStatus', userStatus);
    },
    setInfo() {
      var info = {
        country:    this.get('selectedCountry').toJSON({ includeId: true }),
        city:       this.get('selectedCity').toJSON({ includeId: true }),
        userStatus: this.get('selectedUserStatus').toJSON({ includeId: true })
      };

      var infoString = JSON.stringify(info);

      Ember.$.cookie('userInfo', infoString, { expires: 7, path: '/' });
      this.send('updateUserInfo', info);

      this.transitionTo('home.overview.all');
    }
  }
});

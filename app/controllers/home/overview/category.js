import Ember from 'ember';

export default Ember.Controller.extend({
  activePoint: Ember.computed.alias('pointModels.firstObject'),
  currentLocation: null,

  getCurrentPosition: Ember.on('init', function() {
    navigator.geolocation.getCurrentPosition(
      function(pos) {
        var crd = pos.coords;

        this.set('currentLocation', {
          lat: crd.latitude,
          lng: crd.longitude
        });
      }.bind(this),
      function() {
        if (typeof localStorage['authorizedGeoLocation'] == "undefined" || localStorage['authorizedGeoLocation'] == "0" ) {
          $.getScript('https://www.google.com/jsapi', function() {
            if ((typeof google == 'object') && google.loader && google.loader.ClientLocation) {
              this.set('currentLocation', {
                lat: google.loader.ClientLocation.latitude, 
                lng: google.loader.ClientLocation.longitude
              });
            } else {
              // Set current location top Paris if all fails
              this.set('currentLocation', {
                lat: 48.8588536,
                lng: 2.3125377
              });
            }
          }.bind(this));
        }
      }.bind(this)
    );
  }),

  points: Ember.computed('pointModels.@each', {
    get() {
      var points = this.get('pointModels');
      if (points != undefined) {
        return points.map((p) => {
          return {
            id: p.get('id'),
            location: L.latLng(p.get('latitude'), p.get('longitude')),
            pointModel: p
          };
        });
      } else {
        return [];
      }
    }
  }),

  mainCategories: Ember.computed.filterBy('tags', 'category', 'main_category')

});

import Ember from 'ember';

export default Ember.Controller.extend({
  currentLocation: null,

  getCurrentPosition: Ember.on('init', function() {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var crd = pos.coords;

      this.set('currentLocation', {
        lat: crd.latitude,
        lng: crd.longitude
      });
    }.bind(this));
  })
});
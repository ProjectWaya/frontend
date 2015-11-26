import Ember from 'ember';
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';

export default EmberLeafletComponent.extend({
  classNameBindings: ['isReady'],
  classNames: ['map'],
  isReady: Ember.computed.bool('location'),
  // Default location
  location: {
    lat: 48.306940000000000000,
    lng: 14.285830000000032000
  },

  center: Ember.computed('location', {
    get() {
      var location = this.get('location');
      return L.latLng(location.lat, location.lng);
    }
  })
});

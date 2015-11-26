import Ember from 'ember';
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';

export default EmberLeafletComponent.extend({
  classNames: ['map'],

  center: Ember.computed({
    get() {
      return L.latLng(48.306940000000000000, 14.285830000000032000);
    }
  })
});

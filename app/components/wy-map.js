import Ember from 'ember';
import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map';
import MarkerCollectionLayer from  'ember-leaflet/layers/marker-collection';
import MarkerLayer from  'ember-leaflet/layers/marker';
import OpenStreetMapLayer from '../layers/open-street-map-layer';

var markerLayer = MarkerLayer.extend({
  options: Ember.computed({
    get() {
      var isActive = this.get("controller.activePoint.id") == this.get('content.id');
      var icon = null;

      if (isActive) {
        this.set('isActive', true)
        icon = this.get('controller')._getHighlightIcon();
      } else {
        icon = this.get('controller')._getDefaultIcon();
      }

      return { icon: icon }
    }
  }),

  observeLayer: Ember.observer('layer', function() {
    if (this.get('isActive')) {
      this.set('controller.activeMarker', this._layer);
    }
  }),

  click(e) {
    this.get('controller').send('setActivePoint', this);
  }
});

var customIcon = L.Icon.extend({
  options: {
    shadowUrl: 'http://leafletjs.com/docs/images/leaf-shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
  }
});

var markerCollectionLayer = MarkerCollectionLayer.extend({
  contentBinding: 'controller.points',
  itemLayerClass: markerLayer
});

export default EmberLeafletComponent.extend({
  activePoint: null,
  activeMarker: null,
  points: null,
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
  }),

  childLayers: Ember.computed({
    get() {
      return [
        OpenStreetMapLayer,
        markerCollectionLayer
      ];
    }
  }),

  didCreateLayer() {
    this._super();
    L.control.locate().addTo(this._layer);
  },

  _getDefaultIcon() {
    return new customIcon({
        iconUrl: 'http://leafletjs.com/docs/images/leaf-green.png'
    });
  },

  _getHighlightIcon() {
    return new customIcon({
        iconUrl: 'http://leafletjs.com/docs/images/leaf-red.png'
    });
  },

  actions: {
    setActivePoint(markerObject) {
      var newMarker = markerObject._layer
      var oldActiveMarker = this.get('activeMarker')

      if (oldActiveMarker) {
        oldActiveMarker.setIcon(this._getDefaultIcon())
      }

      newMarker.setIcon(this._getHighlightIcon())

      this.set('activeMarker', newMarker)
      this.set('activePoint', markerObject.get('content.pointModel'))
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  activePoint: Ember.computed.alias('model.firstObject'),
  currentLocation: null,
  queryParams: {
    country: {
      refreshModel: true
    },
    city: {
      refreshModel: true
    },
    userStatus: {
      refreshModel: true
    }
  },

  getCurrentPosition: Ember.on('init', function() {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var crd = pos.coords;

      this.set('currentLocation', {
        lat: crd.latitude,
        lng: crd.longitude
      });
    }.bind(this));
  }),

  points: Ember.computed('model.points', {
    get() {
      return this.get('model.points').map((p) => {
        return {
          id: p.get('id'),
          location: L.latLng(p.get('latitude'), p.get('longitude')),
          pointModel: p
        };
      });
    }
  }),

  mainCategories: Ember.computed.filterBy('tags', 'category', 'main_category')

});

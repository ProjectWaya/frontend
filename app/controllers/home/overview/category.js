import Ember from 'ember';

export default Ember.Controller.extend({
  activePoint: Ember.computed.alias('pointModels.firstObject'),
  currentLocation: null,

  getCurrentPosition: Ember.on('init', function() {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var crd = pos.coords;

      this.set('currentLocation', {
        lat: crd.latitude,
        lng: crd.longitude
      });
    }.bind(this));
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

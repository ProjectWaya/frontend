import EmberLeafletLayer from 'ember-leaflet/layers/layer';

export default EmberLeafletLayer.extend({
  _newLayer: function() {
    return L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      updateWhenIdle: false 
    });
  }
});  
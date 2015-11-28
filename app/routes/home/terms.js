import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this._super();
    Ember.$("body").animate({ scrollTop: 0 }, '300', 'easeOutQuad');
  }
});
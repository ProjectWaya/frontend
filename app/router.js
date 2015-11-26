import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/:lang' }, function() {
    this.route('onboarding');
    this.route('overview', function() {
      this.route('category', { path: '/:category_id' }, function() {
        this.route('subCategory',{ path: ':sub_category_id' });
      });
    });
  });
});

export default Router;

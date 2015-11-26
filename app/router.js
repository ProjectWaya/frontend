import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
    this.route('category', {path: '/:category_id'});
  });
  this.route('onboarding');
});

export default Router;

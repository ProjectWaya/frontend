import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('onboarding');
  this.route('finder', function() {
    this.route('shelter');
    this.route('health');
    this.route('transportation');
    this.route('asylum');
    this.route('education');
    this.route('administrative');
    this.route('entertainment');
    this.route('food');
  });
});

export default Router;
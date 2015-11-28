import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var userStatus = this.get('store').find('user-status');
    var countries = this.get('store').find('country', {include: 'cities'});
    console.log(countries);
    return Ember.RSVP.hash({
      userStatus: userStatus,
      countries: countries
    });
  },
  
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('userStatus', model.userStatus);
    controller.set('countries', model.countries);
  }
});

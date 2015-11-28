import Ember from 'ember';

export default Ember.Component.extend({
  currentCity: null,
  currentCountry: null,
  currentUserStatus: null,
  classNames: ['settings-box'],
  visible: Ember.computed('currentCity','currentCountry','currentUserStatus', function() {
    return this.get('currentCity') && this.get('currentCountry') && this.get('currentUserStatus');
  })
});

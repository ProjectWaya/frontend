import Ember from 'ember';

export default Ember.Component.extend({
  classNames:        ['settings-box'],

  currentCity:       Ember.computed.alias('userInfo.city'),
  currentCountry:    Ember.computed.alias('userInfo.country'),
  currentUserStatus: Ember.computed.alias('userInfo.userStatus'),

  visible: Ember.computed('currentCity','currentCountry','currentUserStatus', {
    get() {
      return this.get('currentCity') && this.get('currentCountry') && this.get('currentUserStatus');
    }
  })
});

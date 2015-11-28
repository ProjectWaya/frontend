export default {
  name: 'user-status',

  initialize(container, application) {
    var userInfoCookie = Ember.$.cookie('userInfo');
    
    if (userInfoCookie != null) {
      var userInfo = JSON.parse(userInfoCookie);

      container.register('userInfo:session', userInfo, { instantiate: false })
      container.injection('controller', 'userInfo', 'userInfo:session')
    }
  }
}

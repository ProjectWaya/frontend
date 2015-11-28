export default {
  name: 'user-status',

  initialize(container, application) {
    var userInfoCookie = $.cookie('userInfo');
    
    if (userInfoCookie != null) {
      var userInfo = JSON.parse(userInfoCookie);

      container.register('userInfo:util', userInfo, { instantiate: false })
      container.injection('controller', 'userInfo', 'userInfo:util')
      container.injection('component', 'userInfo', 'userInfo:util')
      container.injection('route', 'userInfo', 'userInfo:util')
    }
  }
}

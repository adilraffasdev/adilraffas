/**
 * Admin auth guard — cookie-based, no localStorage race condition
 */
(function(){
  var NAME = 'ar_auth';

  function getCookie(n) {
    var m = document.cookie.match('(^|;)\\s*' + n + '\\s*=\\s*([^;]+)');
    return m ? m[2] : null;
  }

  // Not on login page → check cookie
  if (window.location.pathname.indexOf('login') === -1) {
    if (getCookie(NAME) !== '1') {
      window.location.replace('/admin/login.html');
      return;
    }
  }

  window.adminLogout = function() {
    document.cookie = NAME + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    window.location.replace('/admin/login.html');
  };
})();

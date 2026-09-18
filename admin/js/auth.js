/**
 * Admin auth guard - bulletproof version
 */
var SESSION_KEY = 'ar_admin_session';

function checkAuth() {
  try {
    var raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    var s = JSON.parse(raw);
    if (!s || !s.t) return false;
    // Valid for 24 hours
    return (Date.now() - s.t) < 86400000;
  } catch(e) {
    return false;
  }
}

// Only redirect if NOT on login page
if (window.location.pathname.indexOf('login') === -1) {
  if (!checkAuth()) {
    window.location.replace('/admin/login.html');
  }
}

window.adminLogout = function() {
  localStorage.removeItem(SESSION_KEY);
  window.location.replace('/admin/login.html');
};

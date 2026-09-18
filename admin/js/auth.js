/**
 * Admin auth guard
 * Simple localStorage session check — no timing issues, no loops
 */
(function() {
  var SESSION_KEY = 'ar_admin_session';

  // Check if session exists synchronously
  var session = localStorage.getItem(SESSION_KEY);
  if (!session) {
    window.location.replace('/admin/login.html');
    return;
  }

  // Session exists — validate it hasn't expired (24h)
  try {
    var data = JSON.parse(session);
    var age = Date.now() - data.time;
    if (age > 86400000) { // 24 hours
      localStorage.removeItem(SESSION_KEY);
      window.location.replace('/admin/login.html');
      return;
    }
  } catch(e) {
    localStorage.removeItem(SESSION_KEY);
    window.location.replace('/admin/login.html');
    return;
  }

  // Add logout function globally
  window.adminLogout = function() {
    localStorage.removeItem(SESSION_KEY);
    window.location.replace('/admin/login.html');
  };
})();

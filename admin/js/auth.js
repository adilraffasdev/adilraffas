/**
 * Netlify Identity auth guard
 * Protects all admin pages except login.html
 */

// Wait for Netlify Identity to initialize before checking auth
netlifyIdentity.on('init', function(user) {
  if (!user) {
    // Not logged in — go to login
    window.location.replace('/admin/login.html');
  }
});

netlifyIdentity.on('logout', function() {
  window.location.replace('/admin/login.html');
});

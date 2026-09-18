/**
 * Netlify Identity auth guard
 * Include this script on every admin page (except login.html)
 * It redirects to login.html if the user is not authenticated
 */
(function() {
  // Load Netlify Identity Widget
  var script = document.createElement('script');
  script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
  script.onload = function() {
    netlifyIdentity.on('init', function(user) {
      if (!user) {
        // Not logged in — redirect to login
        window.location.href = '/admin/login.html';
      }
    });
    netlifyIdentity.on('logout', function() {
      window.location.href = '/admin/login.html';
    });
    netlifyIdentity.init();
  };
  document.head.appendChild(script);
})();

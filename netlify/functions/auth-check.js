/**
 * Netlify Function — auth-check
 * Compares submitted password hash against ADMIN_HASH environment variable
 * The actual password never travels over the network — only its SHA-256 hash
 */
exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ ok: false }) };
  }

  try {
    var body = JSON.parse(event.body);
    var submittedHash = body.hash;

    // ADMIN_HASH is set in Netlify dashboard → Environment variables
    // Never in code, never in GitHub
    var correctHash = process.env.ADMIN_HASH;

    if (!correctHash) {
      return {
        statusCode: 500,
        body: JSON.stringify({ ok: false, msg: 'Server not configured' })
      };
    }

    var ok = submittedHash === correctHash.toLowerCase();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: ok })
    };
  } catch(e) {
    return { statusCode: 400, body: JSON.stringify({ ok: false }) };
  }
};

/**
 * Netlify Function — auth-check
 * Compares submitted SHA-256 hash against the stored hash
 */
exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ ok: false }) };
  }

  try {
    var body = JSON.parse(event.body);
    var submittedHash = (body.hash || '').toLowerCase().trim();

    // Use env variable if set, otherwise use hardcoded hash
    // Hash of: Adil#91_Raffas@26
    var correctHash = (process.env.ADMIN_HASH || '8cc2461ceaad1e8f259cc925b137d54f01a9bc0a0b9de825fe8b41416a957f6b').toLowerCase().trim();

    var ok = submittedHash.length === 64 && submittedHash === correctHash;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://adilraffas.online'
      },
      body: JSON.stringify({ ok: ok })
    };
  } catch(e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: e.message })
    };
  }
};

const _stored = (() => { try { return JSON.parse(localStorage.getItem('mediasoft_auth')); } catch { return null; } })();
const AUTH_CONFIG = {
    username: (_stored && _stored.username) || 'admin',
    password: (_stored && _stored.password) || 'mediasoft2024'
};

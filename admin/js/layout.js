function checkAuth() {
    var m = document.cookie.match('(^|;)\\s*ar_auth\\s*=\\s*([^;]+)');
    if (!m || m[2] !== '1') {
        window.location.replace('/admin/login.html');
        return null;
    }
    return { loggedIn: true };
}

function logout() {
    document.cookie = 'ar_auth=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    window.location.replace('/admin/login.html');
}

function initTheme() {
    const saved = localStorage.getItem('mediasoft_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('themeToggle');
    if (btn) {
        btn.innerHTML = saved === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('mediasoft_theme', next);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.innerHTML = next === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

function initLayout(page) {
    checkAuth();

    const sidebar = document.getElementById('sidebar');
    document.getElementById('sidebarNav').innerHTML = `
        <a href="index.html" class="${page === 'dashboard' ? 'active' : ''}"><i class="fa-solid fa-chart-pie"></i> Dashboard</a>
        <a href="packages.html" class="${page === 'packages' ? 'active' : ''}"><i class="fa-solid fa-tag"></i> Packages</a>
        <a href="projects.html" class="${page === 'projects' ? 'active' : ''}"><i class="fa-solid fa-briefcase"></i> Projects</a>
        <a href="clients.html" class="${page === 'clients' ? 'active' : ''}"><i class="fa-solid fa-address-book"></i> Clients</a>
        <a href="messages.html" class="${page === 'messages' ? 'active' : ''}"><i class="fa-solid fa-envelope"></i> Messages <span id="msgBadge" class="badge-msg" style="display:none;margin-left:auto;background:var(--danger);color:#fff;font-size:11px;padding:1px 7px;border-radius:10px;font-weight:700;"></span></a>
        <a href="finance.html" class="${page === 'finance' ? 'active' : ''}"><i class="fa-solid fa-coins"></i> Finance</a>
        <a href="settings.html" class="${page === 'settings' ? 'active' : ''}"><i class="fa-solid fa-gear"></i> Settings</a>
    `;

    document.getElementById('sidebarFooter').innerHTML = `
        <a href="#" onclick="logout()" style="color:var(--danger);"><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
    `;

    const userEl = document.getElementById('userDisplay');
    if (userEl) userEl.textContent = 'Admin';

    // Add theme toggle HTML if not already present
    const topbarActions = document.querySelector('.topbar-actions');
    if (topbarActions && !document.getElementById('themeToggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'theme-toggle';
        toggleBtn.id = 'themeToggle';
        toggleBtn.onclick = toggleTheme;
        topbarActions.prepend(toggleBtn);
    }

    updateMsgBadge();
    initTheme();
}

function updateMsgBadge() {
    const badge = document.getElementById('msgBadge');
    if (!badge) return;
    try {
        const msgs = JSON.parse(localStorage.getItem('mediasoft_messages') || '[]');
        const unread = msgs.filter(m => !m.read).length;
        if (unread > 0) { badge.textContent = unread; badge.style.display = 'inline'; }
        else badge.style.display = 'none';
    } catch { badge.style.display = 'none'; }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}




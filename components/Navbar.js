export function Link(href, text, isActive = false) {
    return `<a href="${href}" class="nav-link ${isActive ? 'active' : ''}">${text}</a>`;
}

export function Navbar() {
    const path = window.location.pathname;
    const isHome = path === '/' || path.includes('index.html');
    const isBattlePass = path.includes('battlepass.html');
    const isGunsmith = path.includes('gunsmith.html');

    return `
    <nav class="navbar">
        <div class="logo">CALL<span class="text-gold">OF</span>DUTY</div>
        <div class="nav-links">
          ${Link('index.html', 'Home', isHome)}
          ${Link('battlepass.html', 'Battle Pass', isBattlePass)}
          ${Link('gunsmith.html', 'Gunsmith', isGunsmith)}
          ${Link('#', 'Warzone')}
          ${Link('#', 'Esports')}
          ${Link('#', 'Store')}
        </div>
        <div class="nav-actions">
            <!-- Simulated User State -->
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="text-gold" style="font-family: var(--cod-font-header); font-size: 1.2rem;">CP 2400</span>
                <div style="width: 40px; height: 40px; border: 1px solid var(--cod-gold); background: #333; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 0.7rem; color: #fff;">RANK 55</span>
                </div>
            </div>
            <button class="btn-primary" style="padding: 0.5rem 1.5rem; font-size: 0.9rem;">LOGIN</button>
        </div>
      </nav>
  `;
}

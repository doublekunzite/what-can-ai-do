// navigation.js - Works from any page location
(function() {
    // Auto-detect the base path (works locally and on GitHub Pages)
    const basePath = window.location.pathname.split('/').slice(0, -1).join('/') || '';
    const repoRoot = basePath.includes('/what-can-ai-do') ? '/what-can-ai-do' : '';

    const navItems = [
        { name: 'Home', url: `${repoRoot}/index.html` },
        { name: 'Blog', url: `${repoRoot}/blog.html` },
        { name: 'Prompt Repository', url: `${repoRoot}/prompts.html` },
        { name: 'Prompt Builder', url: `${repoRoot}/prompt-builder.html` },
        { name: 'Compare Models', url: `${repoRoot}/compare.html` },
        { name: 'Common Concerns', url: `${repoRoot}/faq.html` }
    ];

    function injectNavigation() {
        const currentPath = window.location.pathname;
        
        // Inject site title BEFORE nav
        const titleHTML = `<h1 class="site-title" style="text-align:center; margin: 1em 0 0.5em; font-size: 2.5em;">What Can AI Do?</h1>`;

        const navHTML = `
            <nav>
                <ul>
                    ${navItems.map(item => `
                        <li><a href="${item.url}" ${currentPath.includes(item.url) ? 'class="active"' : ''}>${item.name}</a></li>
                    `).join('')}
                </ul>
            </nav>
        `;

        let navContainer = document.getElementById('nav-container');
        if (!navContainer) {
            navContainer = document.createElement('div');
            navContainer.id = 'nav-container';
            document.body.insertBefore(navContainer, document.body.firstChild);
        }

        navContainer.innerHTML = titleHTML + navHTML;
    }

    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectNavigation);
    } else {
        injectNavigation();
    }
})();
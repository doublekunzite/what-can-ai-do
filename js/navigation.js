// Navigation structure - edit this ONE file to update all pages
const navItems = [
    { name: 'Home', url: 'index.html' },
    { name: 'Blog', url: 'blog.html' },
    { name: 'Prompts', url: 'prompts.html' },
    { name: 'Prompt Builder', url: 'prompt-builder.html' },
    { name: 'Learn the Risks', url: 'risks.html' },
    { name: 'Compare Models', url: 'compare.html' },
    { name: 'Common Concerns', url: 'faq.html' }
];

function injectNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Inject site title BEFORE nav
    const titleHTML = `<h1 class="site-title" style="text-align:center; margin: 1em 0 0.5em; font-size: 2.5em;">What Can AI Do?</h1>`;

    const navHTML = `
        <nav>
            <ul>
                ${navItems.map(item => `
                    <li><a href="${item.url}" ${item.url === currentPage ? 'class="active"' : ''}>${item.name}</a></li>
                `).join('')}
            </ul>
        </nav>
    `;

    let navContainer = document.getElementById('nav-container');
    if (!navContainer) {
        navContainer = document.createElement('div');
        navContainer.id = 'nav-container';
        const main = document.querySelector('main');
        if (main) main.prepend(navContainer);
    }

    navContainer.innerHTML = titleHTML + navHTML;
}

// Run on page load
document.addEventListener('DOMContentLoaded', injectNavigation);
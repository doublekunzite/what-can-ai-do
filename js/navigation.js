// Navigation structure - edit this ONE file to update all pages
const navItems = [
    { name: 'Home', url: 'index.html' },
    { name: 'Explore Uses', url: 'use-cases.html' },
    { name: 'Prompts', url: 'prompts.html' },
    { name: 'Prompt Builder', url: 'prompt-builder.html' }, // Add new pages here
    { name: 'Learn the Risks', url: 'risks.html' },
    { name: 'Compare Models', url: 'compare.html' },
    { name: 'Common Concerns', url: 'faq.html' },
    { name: 'How I Made This', url: 'how-i-made-this.html' }
];

function injectNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navHTML = `
        <nav>
            <ul>
                ${navItems.map(item => `
                    <li><a href="${item.url}" ${item.url === currentPage ? 'class="active"' : ''}>${item.name}</a></li>
                `).join('')}
            </ul>
        </nav>
    `;
    
    // Find or create nav container
    let navContainer = document.getElementById('nav-container');
    if (!navContainer) {
        navContainer = document.createElement('div');
        navContainer.id = 'nav-container';
        
        // Insert after h1 if it exists, otherwise at the top
        const h1 = document.querySelector('h1');
        if (h1) {
            h1.after(navContainer);
        } else {
            document.querySelector('main').prepend(navContainer);
        }
    }
    
    navContainer.innerHTML = navHTML;
}

// Run on page load
document.addEventListener('DOMContentLoaded', injectNavigation);
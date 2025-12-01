// Theme Toggle Functionality
(function() {
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    // Check for system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme on page load
    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            if (themeToggle) themeToggle.textContent = '☀️ Light';
        } else {
            // Remove the attribute for dark mode (default)
            document.documentElement.removeAttribute('data-theme');
            if (themeToggle) themeToggle.textContent = '🌙 Dark';
        }
    }
    
    // Determine initial theme
    if (savedTheme) {
        // Use saved preference
        applyTheme(savedTheme);
    } else if (systemPrefersDark) {
        // Use system preference (dark)
        applyTheme('dark');
    } else {
        // Default to dark mode as requested
        applyTheme('dark');
    }
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'light') {
                // Switch to dark mode
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                // Switch to light mode
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            // Only apply system theme if user hasn't manually set a preference
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
})();
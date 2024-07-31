document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');
    const portfolioGrid = document.getElementById('portfolioGrid');
    const toggleButton = document.getElementById('togglePortfolio');
    const cookieNotice = document.getElementById('cookie-notice');
    const acceptButton = document.getElementById('accept-cookies');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    toggleButton.addEventListener('click', () => {
        portfolioGrid.classList.toggle('expanded');
        const isExpanded = portfolioGrid.classList.contains('expanded');
        toggleButton.textContent = isExpanded 
            ? toggleButton.getAttribute('data-collapse-text') 
            : toggleButton.getAttribute('data-expand-text');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const setCookie = (name, value, days) => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    };

    const getCookie = (name) => {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    };

    if (getCookie('cookieConsent') !== 'accepted') {
        cookieNotice.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        setCookie('cookieConsent', 'accepted', 365);
        cookieNotice.style.display = 'none';
    });

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const articleId = event.currentTarget.getAttribute('data-article-id');
            if (articleId) {
                window.open(`article.html?id=${articleId}`, '_blank', 'width=800,height=600');
            }
        });
    });
});
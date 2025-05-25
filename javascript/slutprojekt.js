document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const links = document.getElementById('menu-links');

    toggle.addEventListener('click', () => {
        links.classList.toggle('show');
    });
});

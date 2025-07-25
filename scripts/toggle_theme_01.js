// TODO: add DOMContentLoaded

// simple light/dark theme toggle functionality
const toggleBtn = document.getElementById('toggle-theme-btn');
const html = document.documentElement;
const body = document.body;

// Optional: load saved state
if (localStorage.getItem('theme') === 'dark') {
   body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    // add listener before toggling,
    // NOTE: optional and not necessary, theme-changing can always exists after the first toggle
    // but for consistency reasons (task sequence) it will be removed after interaction
    body.addEventListener('transitionend', function handler(e) {
    // listen for the body's transition remove the helper class after transition finishes
    if (e.propertyName === 'color') {
        html.classList.remove('theme-changing');
        // console.log('removed');
    }
    }, { once: true }); // auto-remove listener after a single time

    // toggle the transition
    // add dynamic .theme-changing class for css transition effects
    html.classList.add('theme-changing');
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
window.addEventListener('load', () => {
    const loadTime = (performance.now() / 1000).toFixed(3);
    document.getElementById('loadTime').textContent = `Page load time is ${loadTime} seconds`;
});

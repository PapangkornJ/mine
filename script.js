window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const robinAlert = document.getElementById('alert');
        if (robinAlert) {
            robinAlert.classList.add('hide');
            setTimeout(() => {
                robinAlert.style.display = 'none';
            }, 500);
        }
    }, 30000);
});
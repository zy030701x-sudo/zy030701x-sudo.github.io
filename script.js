const button = document.querySelector('#btn-goals');
const goals = document.querySelector('#learning-goals');

let isVisible = true;

button.addEventListener('click', () => {
    if (isVisible) {
        goals.className = 'goals-hidden';
        button.textContent = 'Show Learning Goals';
        isVisible = false;
    } else {
        goals.className = '';
        button.textContent = 'Hide Learning Goals';
        isVisible = true;
    }
});
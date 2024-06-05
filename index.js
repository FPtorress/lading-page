
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Obrigado por se inscrever, ${email}!`);
        document.getElementById('email').value = '';
    } else {
        alert('Por favor, insira um email válido.');
    }
});

// script.js
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleArrow = document.getElementById('toggle-arrow');
    const aboutContent = document.getElementById('about-content');

    toggleArrow.addEventListener('click', function() {
        if (aboutContent.classList.contains('show')) {
            aboutContent.classList.remove('show');
            toggleArrow.innerHTML = '&#x25BC;'; // Set the arrow to point down
        } else {
            aboutContent.classList.add('show');
            toggleArrow.innerHTML = '&#x25B2;'; // Set the arrow to point up
        }
    });
});



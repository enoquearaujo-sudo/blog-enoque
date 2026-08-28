// Lógica do Botão de Curtida (Alternância)
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let isLiked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;
    
    if (isLiked) {
        likeCount.textContent = '1';
        likeBtn.classList.add('liked');
    } else {
        likeCount.textContent = '0';
        likeBtn.classList.remove('liked');
    }
});

// Lógica do Modo Claro / Escuro com Transição
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = 'Modo Escuro';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Modo Claro';
    }
});
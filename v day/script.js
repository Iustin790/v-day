const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const quizSection = document.getElementById('quiz-section');
const successSection = document.getElementById('success-section');

// Detectăm dacă dispozitivul are touch (mobil/tabletă)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    // Pe mobil: Butonul începe să se miște haotic singur
    noBtn.classList.add('moving-mobile');
    
    // Dacă totuși reușește să pună degetul pe el, îl teleportăm instant
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
} else {
    // Pe desktop: Rămâne logica de fugă la mouseover
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
}

yesBtn.addEventListener('click', () => {
    quizSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    // Oprim mișcarea butonului de Nu după ce se apasă Da
    noBtn.style.display = 'none';
});
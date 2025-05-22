
document.addEventListener('DOMContentLoaded', function() {
    const createBackToTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'fixed bottom-4 right-4 bg-gray-800 text-white w-10 h-10 rounded-full opacity-0 transition-opacity duration-300';
        button.style.opacity = '0';
        button.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                button.style.opacity = '1';
            } else {
                button.style.opacity = '0';
            }
        });
    };
    
    if (document.body.scrollHeight > window.innerHeight * 1.5) {
        createBackToTopButton();
    }

    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            const inner = this.querySelector('.flip-card-inner');
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
    });
});

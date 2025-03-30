document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const languageBtns = document.querySelectorAll('.language-btn');
    const englishElements = document.querySelectorAll('.lang-en');
    const vietnameseElements = document.querySelectorAll('.lang-vi');

    languageBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const language = this.getAttribute('data-lang');
            languageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            if (language === 'en') {
                englishElements.forEach(el => el.style.display = 'block');
                vietnameseElements.forEach(el => el.style.display = 'none');
            } else {
                englishElements.forEach(el => el.style.display = 'none');
                vietnameseElements.forEach(el => el.style.display = 'block');
            }
        });
    });
});
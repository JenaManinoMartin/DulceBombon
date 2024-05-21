document.addEventListener('scroll', function() {
    const faqMenu = document.getElementById('faq-menu');
    const halfPageHeight = document.documentElement.scrollHeight / 2;
    if (window.scrollY > halfPageHeight) {
        faqMenu.querySelector('.faq-container').style.display = 'flex';
    } else {
        faqMenu.querySelector('.faq-containerv').style.display = 'none';
    }
});
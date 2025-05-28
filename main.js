document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-init');
    observer.observe(section);
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPos = window.scrollY || window.pageYOffset;
    sections.forEach(sec => {
        const top = sec.offsetTop - 80;
        const bottom = top + sec.offsetHeight;
        const id = sec.getAttribute('id');
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if (scrollPos >= top && scrollPos < bottom) {
            link && link.classList.add('active');
        } else {
            link && link.classList.remove('active');
        }
    });
});

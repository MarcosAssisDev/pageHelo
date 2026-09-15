/* ============================================
   SMOOTH SCROLL & NAVEGAÇÃO
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   SCROLL ANIMATIONS (Fade-in ao scroll)
   ============================================ */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.querySelectorAll('.servico-card, .why-card, .highlight-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

/* ============================================
   CONTADOR DE SCROLL (Sticky Header)
   ============================================ */
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        header.style.boxShadow = '0 8px 24px rgba(45, 122, 122, 0.2)';
    } else {
        header.style.boxShadow = '0 4px 12px rgba(45, 122, 122, 0.15)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/* ============================================
   LINK WHATSAPP COM TRACKING SIMPLES
   ============================================ */
document.querySelectorAll('.whatsapp-float, .btn-primary').forEach(link => {
    link.addEventListener('click', (e) => {
        // Aqui você pode adicionar Google Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'whatsapp_click', {
                'event_category': 'contact',
                'event_label': 'WhatsApp Link'
            });
        }
    });
});

/* ============================================
   LAZY LOADING DE IMAGENS
   ============================================ */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ============================================
   MOBILE MENU (Se necessário adicionar depois)
   ============================================ */
function initMobileMenu() {
    // Implementação futura se precisar de menu mobile expansível
}

/* ============================================
   VALIDAÇÃO DE FORMULÁRIO (Se adicionar contato)
   ============================================ */
function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Enviar via AJAX ou redirecionar
        });
    });
}

/* ============================================
   INICIALIZAÇÃO
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    console.log('🐾 Site Heloisa Fernandes carregado com sucesso!');
    initMobileMenu();
    initForms();
});

/* ============================================
   UTILITÁRIO: Scroll para Top
   ============================================ */
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Mostrar botão de scroll to top em mobile
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        // Você pode adicionar um botão de "voltar ao topo" aqui
    }
});

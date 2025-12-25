document.querySelectorAll('.slide').forEach(el => {
    new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) el.classList.add('visible');
        });
    }).observe(el);
});

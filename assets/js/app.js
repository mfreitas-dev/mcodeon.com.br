    // ── HAMBURGER MENU ──
    const hamburger = document.getElementById('hamburger');
    const drawer    = document.getElementById('nav-drawer');
    const drawerLinks = drawer.querySelectorAll('.drawer-link');

    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      drawer.classList.toggle('open');
      hamburger.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // close on link click
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // close on outside click
    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // ── SCROLL REVEAL ──
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
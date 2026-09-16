// Carrousel plein écran du hero (page d'accueil uniquement)
(function () {
	const slides = document.querySelectorAll('.hero-slide');
	if (slides.length > 1) {
		let current = 0;
		setInterval(() => {
			slides[current].classList.remove('is-active');
			current = (current + 1) % slides.length;
			slides[current].classList.add('is-active');
		}, 5000);
	}
})();

// Menu burger plein écran
(function () {
	const toggle = document.getElementById('navToggle');
	const menu = document.getElementById('mobileMenu');
	if (!toggle || !menu) return;

	function closeMenu() {
		toggle.classList.remove('is-open');
		menu.classList.remove('is-open');
		toggle.setAttribute('aria-expanded', 'false');
	}

	toggle.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('is-open');
		toggle.classList.toggle('is-open', isOpen);
		toggle.setAttribute('aria-expanded', String(isOpen));
	});

	menu.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', closeMenu);
	});
})();

// Header : fond transparent en haut du hero, plein en scrollant
// (sans effet sur les pages avec header.is-solid, qui reste toujours plein)
(function () {
	const header = document.getElementById('siteHeader');
	if (!header || header.classList.contains('is-solid')) return;

	function updateHeader() {
		if (window.scrollY > 60) {
			header.classList.add('is-scrolled');
		} else {
			header.classList.remove('is-scrolled');
		}
	}

	window.addEventListener('scroll', updateHeader, { passive: true });
	updateHeader();
})();
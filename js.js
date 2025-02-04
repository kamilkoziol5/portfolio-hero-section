// Funkcja do otwierania menu mobilnego
function openSidebar() {
	document.querySelector(".mobile-menu").classList.add("open")
}

// Funkcja do zamykania menu mobilnego
function closeSidebar() {
	document.querySelector(".mobile-menu").classList.remove("open")
}

gsap.from('.logo' , { duration: 1, y: '-100%',  ease: 'elastic'  });
gsap.from('.menu-items li' , { duration: 1, delay: .5 ,  y: '-60px', stagger: .2 ,  ease: 'elastic'  });
gsap.from(".btn-menu" , { duration: 1 , opacity: 0, scale: 0 , rotation: 100, y: -300 });
gsap.from(".heroimg", { duration: 2, delay: 1 ,  opacity: 0, scale: 0, rotation: 360,  ease: "power2.out" });
gsap.from('.text-area h1', { duration: 1, delay: 1.5 , opacity: 0, y: '-100%' ,  ease: 'power2.out'} );
gsap.from('.text-area p', { duration: 1, delay: 2 , opacity: 0, x: '100%' ,  ease: 'power2.out'} );
gsap.from('.social-icons a', { duration: 1, delay: 2.5 , opacity: 0, x: '100%' , scale: 0 , stagger: .2 , ease: 'power2.out'} );
gsap.from(".buttons-area ", {duration: 1, delay: 3, opacity: 0, y: '100%' ,  ease: 'power2.out'} )


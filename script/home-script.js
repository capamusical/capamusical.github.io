    // Carousel functionality
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance carousel
    setInterval(nextSlide, 5000);

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Musical Puzzle Functionality
    const puzzleContainer = document.querySelector('.puzzle-container');
    const puzzleSize = 3;
    const totalPieces = puzzleSize * puzzleSize;
    let pieces = [];

    // Create puzzle pieces
    for (let i = 0; i < totalPieces; i++) {
        const piece = document.createElement('div');
        piece.classList.add('puzzle-piece');
        piece.style.backgroundImage = 'url("https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80")';
        piece.style.backgroundPosition = `-${(i % puzzleSize) * 100}px -${Math.floor(i / puzzleSize) * 100}px`;
        piece.setAttribute('data-index', i);
        pieces.push(piece);
        puzzleContainer.appendChild(piece);
    }

    // Shuffle pieces
    function shufflePieces() {
        for (let i = pieces.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
        updatePuzzleDisplay();
    }

    // Update puzzle display
    function updatePuzzleDisplay() {
        pieces.forEach((piece, index) => {
            piece.style.left = `${(index % puzzleSize) * 100}px`;
            piece.style.top = `${Math.floor(index / puzzleSize) * 100}px`;
        });
    }

    // Check if puzzle is solved
    function checkSolution() {
        return pieces.every((piece, index) => piece.getAttribute('data-index') == index);
    }

    // Handle piece click
    puzzleContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('puzzle-piece')) {
            const clickedIndex = pieces.indexOf(e.target);
            const emptyIndex = pieces.findIndex(piece => piece.getAttribute('data-index') == totalPieces - 1);
            
            if (isAdjacent(clickedIndex, emptyIndex)) {
                [pieces[clickedIndex], pieces[emptyIndex]] = [pieces[emptyIndex], pieces[clickedIndex]];
                updatePuzzleDisplay();
                
                if (checkSolution()) {
                    alert('¡Felicidades! Has resuelto el puzle musical.');
                }
            }
        }
    });

    // Check if two pieces are adjacent
    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / puzzleSize);
        const col1 = index1 % puzzleSize;
        const row2 = Math.floor(index2 / puzzleSize);
        const col2 = index2 % puzzleSize;
        
        return (Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1);
    }

    // Initialize puzzle
    shufflePieces();


    // Código JavaScript para el popup de consentimiento de cookies

// Función para mostrar el popup de cookies
function showCookiePopup() {
    // Crear el contenedor del popup
    const cookiePopup = document.createElement('div');
    cookiePopup.id = 'cookie-popup';
    cookiePopup.style.position = 'fixed';
    cookiePopup.style.bottom = '20px';
    cookiePopup.style.right = '20px';
    cookiePopup.style.padding = '20px';
    cookiePopup.style.backgroundColor = '#333';
    cookiePopup.style.color = '#fff';
    cookiePopup.style.borderRadius = '5px';
    cookiePopup.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
    cookiePopup.style.zIndex = '1000';
    cookiePopup.innerHTML = `
        <p style="margin: 0 0 10px;">Usamos cookies para mejorar tu experiencia. Consulta nuestra <a href="/politicas" style="color: #4caf50; text-decoration: underline;">política de privacidad</a>.</p>
        <button id="accept-cookies" style="padding: 10px 15px; background-color:rgb(148, 153, 148); color: #fff; border: none; border-radius: 3px; cursor: pointer;">Aceptar</button>
    `;

    // Agregar el popup al cuerpo del documento
    document.body.appendChild(cookiePopup);

    // Manejar el clic en el botón de aceptar
    document.getElementById('accept-cookies').addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        document.body.removeChild(cookiePopup);
    });
}

// Función para verificar si el usuario ya aceptó las cookies
function checkCookieConsent() {
    return localStorage.getItem('cookiesAccepted') === 'true';
}

// Lógica principal
if (!checkCookieConsent()) {
    showCookiePopup();
}

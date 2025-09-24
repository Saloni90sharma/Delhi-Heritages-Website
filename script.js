// Combined JavaScript for animations, map interaction, smooth scrolling & landmarks
document.addEventListener('DOMContentLoaded', function () {
    // 🔹 Simple animation for section headings
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transition = 'opacity 1s ease-in-out';

        setTimeout(() => {
            title.style.opacity = '1';
        }, 300);
    });

    // 🔹 NEW: Scroll-based reveal animations for Delhi section
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // 🔹 Enhanced 3D interactions for monument cards
    const monumentCards = document.querySelectorAll('.monument-card');
    monumentCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });

    // 🔹 3D hover effects for food and dress cards
    const hoverCards = document.querySelectorAll('.food-card, .dress-card, .culture-card');
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0px) rotateX(0deg) scale(1)';
        });
    });

    // 🔹 Interactive cube rotation control (click to change rotation speed)
    const heritage3DCube = document.querySelector('.heritage-3d-cube');
    if (heritage3DCube) {
        let rotationSpeed = 10;
        
        heritage3DCube.addEventListener('click', function() {
            rotationSpeed = rotationSpeed === 10 ? 5 : 10;
            this.style.animationDuration = `${rotationSpeed}s`;
        });

        // Add hover effect to pause rotation
        heritage3DCube.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        heritage3DCube.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }

    // 🔹 Map interaction
    const delhiMap = document.querySelector('.delhi-map');
    if (delhiMap) {
        delhiMap.addEventListener('click', function () {
            alert('In a full implementation, this would open an interactive map of Delhi with cultural landmarks!');
        });
    }

    // 🔹 Enhanced smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Add a smooth animation effect
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Add a highlight effect to the target section
                targetElement.style.boxShadow = '0 0 20px rgba(214, 40, 40, 0.3)';
                setTimeout(() => {
                    targetElement.style.boxShadow = '';
                }, 2000);
            }
        });
    });

    // 🔹 Parallax effect for Delhi section backgrounds
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const delhiSection = document.querySelector('.delhi-capital-section');
        
        if (delhiSection) {
            const rate = scrolled * -0.2;
            delhiSection.style.backgroundPosition = `center ${rate}px`;
        }
    });

    // 🔹 EXISTING: Landmark buttons functionality
    const landmarkButtons = document.querySelectorAll('.landmark-btn');
    const landmarkDetails = document.querySelectorAll('.landmark-detail');

    function showLandmark(landmarkId) {
        // Hide all landmark details
        landmarkDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Remove active class from all buttons
        landmarkButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Show selected landmark detail
        const detailElement = document.getElementById(landmarkId);
        if (detailElement) {
            detailElement.classList.add('active');
        }

        // Add active class to clicked button
        const activeButton = document.querySelector(`.landmark-btn[data-landmark="${landmarkId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Add click event to all landmark buttons
    landmarkButtons.forEach(button => {
        button.addEventListener('click', function () {
            const landmarkId = this.getAttribute('data-landmark');
            showLandmark(landmarkId);

            // Smooth scroll to landmarks section
            // const landmarksSection = document.getElementById('landmarks');
            // if (landmarksSection) {
            //     landmarksSection.scrollIntoView({
            //         behavior: 'smooth'
            //     });
            // }
        });
    });

    // Initialize with India Gate visible
    showLandmark('india-gate');

    // 🔹 EXISTING: Image slider functionality
    const images = ["red1.jpg", "red2.jpg", "red3.jpeg", "red4.jpeg"]; // Replace with your actual image paths
    let index = 0;

    const imgElement = document.getElementById("slider-img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (imgElement && prevBtn && nextBtn) {
        function showImage(i) {
            if (i < 0) index = images.length - 1;
            else if (i >= images.length) index = 0;
            else index = i;

            imgElement.src = images[index];
        }

        prevBtn.addEventListener("click", () => showImage(index - 1));
        nextBtn.addEventListener("click", () => showImage(index + 1));
        showImage(index);
    }

    // 🔹 NEW: Auto-scroll through food items on page load
    setTimeout(() => {
        const foodCards = document.querySelectorAll('.food-card');
        foodCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    card.style.transform = 'translateY(0)';
                }, 500);
            }, index * 200);
        });
    }, 1000);

    // 🔹 NEW: Dynamic text animation for main heading
    const mainHeading = document.querySelector('.main-heading');
    if (mainHeading) {
        const text = mainHeading.textContent;
        mainHeading.textContent = '';
        
        let i = 0;
        const typeWriter = setInterval(() => {
            mainHeading.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typeWriter);
            }
        }, 100);
    }

    // 🔹 NEW: Interactive festival items
    const festivalItems = document.querySelectorAll('.festival-item');
    festivalItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const festivals = [
                'Diwali celebrates the victory of light over darkness!',
                'Holi is the festival of colors and joy!',
                'Eid brings communities together in celebration!',
                'Dussehra commemorates the triumph of good over evil!'
            ];
            alert(festivals[index] || 'Experience Delhi\'s vibrant festival culture!');
        });
    });

    console.log('Delhi Heritage Website Enhanced with 3D effects and animations!');
});
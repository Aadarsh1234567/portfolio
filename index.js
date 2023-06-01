const interests = ['coding', 'sports', 'cooking', 'life'];
        const typedTextElement = document.querySelector('.typed-text');
        let currentInterestIndex = 0;
        let currentCharacterIndex = 0;
        let isDeleting = false;
        let typingSpeed = 300; // Adjust the typing speed (milliseconds per character)
        let deleteSpeed = 200; // Adjust the deleting speed (milliseconds per character)
    
        function type() {
            const currentInterest = interests[currentInterestIndex];
            if (!isDeleting && currentCharacterIndex < currentInterest.length) {
                typedTextElement.textContent += currentInterest.charAt(currentCharacterIndex);
                currentCharacterIndex++;
            } else if (isDeleting && currentCharacterIndex >= 0) {
                typedTextElement.textContent = currentInterest.substring(0, currentCharacterIndex);
                currentCharacterIndex--;
            } else {
                isDeleting = !isDeleting;
                if (isDeleting) {
                    typingSpeed = deleteSpeed;
                } else {
                    currentInterestIndex++;
                    if (currentInterestIndex >= interests.length) {
                        currentInterestIndex = 0;
                    }
                    typingSpeed = 300;
                }
            }
            setTimeout(type, typingSpeed);
        }
    
        type();

        const sliders = document.querySelectorAll('.slider');

        sliders.forEach((slider) => {
            const slides = slider.querySelectorAll('.slide');
            let currentSlide = 0;

            function nextSlide() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }

            setInterval(nextSlide, 5000);
        });
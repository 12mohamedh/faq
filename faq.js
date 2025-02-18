let sections = document.querySelectorAll('.section');

function faqCard() {
    sections.forEach(section => {
        section.addEventListener('click', () => {
            let answer = section.querySelector('.answer');
            let minusIcon = section.querySelector('.minus');
            let plusIcon = section.querySelector('.plus');

            // Close all other answers before opening a new one
            sections.forEach(otherSection => {
                if (otherSection !== section) { // Ensure it's not the same section
                    let otherAnswer = otherSection.querySelector('.answer');
                    let otherMinusIcon = otherSection.querySelector('.minus');
                    let otherPlusIcon = otherSection.querySelector('.plus');

                    otherAnswer.classList.remove('answer-on');
                    otherAnswer.style.maxHeight = '0';
                    otherMinusIcon.style.display = 'none';
                    otherPlusIcon.style.display = 'block';
                }
            });

            // Toggle the clicked section
            answer.classList.toggle('answer-on');

            if (answer.classList.contains('answer-on')) {
                answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand
                minusIcon.style.display = 'block';
                plusIcon.style.display = 'none';
            } else {
                answer.style.maxHeight = '0'; // Collapse
                minusIcon.style.display = 'none';
                plusIcon.style.display = 'block';
            }
        });
    });
}

faqCard();

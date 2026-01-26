// main.js - This acts as our ES6 Module entry point

// 1. ES6 Export Function: Now calculates based on maximum possible points
export const calculateUp2Score = (totalPoints, questionCount) => {
    // Each question is worth a max of 2 points. 
    const maxPossiblePoints = questionCount * 2; //cannot do more than 3 questions
    const percentage = (totalPoints / maxPossiblePoints) * 100;
    return Math.round(percentage);
};

// 2. DOM Event Listener
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const resultText = document.getElementById('quiz-result');

    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const totalQuestions = document.querySelectorAll('.form-group').length;
            const formData = new FormData(quizForm);

            let totalPoints = 0;
            let answeredQuestions = 0;

            // Loop through all submitted answers
            for (let [questionName, answerValue] of formData.entries()) {
                answeredQuestions++;
                // Convert the string value ("2", "1", "0") into a real number and add to total
                totalPoints += parseInt(answerValue);
            }

            // Validation
            if (answeredQuestions < totalQuestions) {
                resultText.innerText = `Please answer all ${totalQuestions} questions!`;
                resultText.style.color = "red";
                return;
            }

            // Calculate final percentage
            const finalScore = calculateUp2Score(totalPoints, totalQuestions);

            // Output logic
            if (finalScore >= 90) {
                resultText.innerText = `Score: ${finalScore}% - Its like we are twins...`;
            }else if (finalScore >= 65) {
                resultText.innerText = `Score: ${finalScore}% - You are very Up2! We should be friends :D`;
            } else if (finalScore >= 50) {
                resultText.innerText = `Score: ${finalScore}% - We must agree on quite a bit! `;
            } else if (finalScore >= 30) {
                resultText.innerText = `Score: ${finalScore}% - We share some common ground.`;
            } else {
                resultText.innerText = `Score: ${finalScore}% - We are complete opposites!`;
            }
            resultText.style.color = "var(--accent-sunflower)";
        });
    }
});

// 3. MEDIA HUB LOGIC (AI page)
// document.addEventListener ensures the HTML is fully loaded before the script runs.
document.addEventListener('DOMContentLoaded', () => {

    // 1. Select all the elements with the class 'media-card'
    const mediaCards = document.querySelectorAll('.media-card');

    // 2. Loop through each card and attach a "click" listener to it
    mediaCards.forEach(card => {
        card.addEventListener('click', () => {
            // 3. When clicked, toggle the 'locked' class on and off
            card.classList.toggle('locked');
        });
    });
});
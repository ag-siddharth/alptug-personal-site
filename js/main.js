// js/main.js
// Peer review (CS 5610):
// I really like how you structured this quiz using ES6 modules and kept the logic modular.
// It makes the code easier to maintain and understand.
import calculateUp2Score from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // === 1. QUIZ LOGIC ===
  const quizForm = document.getElementById('quiz-form');
  const resultText = document.getElementById('quiz-result');

  if (quizForm) {
    quizForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Select only the actual question groups (divs with class form-group)
      const totalQuestions = document.querySelectorAll('.form-group').length;
      const formData = new FormData(quizForm);

      let totalPoints = 0;
      let answeredQuestions = 0;

      // Loop through all submitted answers (converted to Array for Airbnb compliance)
      Array.from(formData.entries()).forEach(([, answerValue]) => {
        answeredQuestions += 1;
        // Convert value ("2", "1", "0") to integer
        totalPoints += parseInt(answerValue, 10);
      });

      // Validation: Ensure user answered all questions
      if (answeredQuestions < totalQuestions) {
        resultText.innerText = `Please answer all ${totalQuestions} questions!`;
        resultText.style.color = 'red';
        return;
      }

      // Calculate final percentage using imported utility
      const finalScore = calculateUp2Score(totalPoints, totalQuestions);

      // Output logic
      if (finalScore >= 90) {
        resultText.innerText = `Score: ${finalScore}% - It's like we are twins...`;
      } else if (finalScore >= 65) {
        resultText.innerText = `Score: ${finalScore}% - You are very Up2! We should be friends :D`;
      } else if (finalScore >= 50) {
        resultText.innerText = `Score: ${finalScore}% - We must agree on quite a bit!`;
      } else if (finalScore >= 30) {
        resultText.innerText = `Score: ${finalScore}% - We share some common ground.`;
      } else {
        resultText.innerText = `Score: ${finalScore}% - We are complete opposites!`;
      }
      resultText.style.color = 'var(--accent-sunflower)';
    });
  }

  // === 2. MEDIA HUB LOGIC ===
  const mediaCards = document.querySelectorAll('.media-card');

  if (mediaCards.length > 0) {
    mediaCards.forEach((card) => {
      card.addEventListener('click', () => {
        // Toggle the 'locked' class on/off for mobile tap interaction
        card.classList.toggle('locked');
      });
    });
  }
});

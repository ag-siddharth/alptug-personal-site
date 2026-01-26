// js/utils.js
const calculateUp2Score = (totalPoints, questionCount) => {
  // Each question is worth a max of 2 points.
  const maxPossiblePoints = questionCount * 2;
  const percentage = (totalPoints / maxPossiblePoints) * 100;
  return Math.round(percentage);
};

export default calculateUp2Score;

document.getElementById('submit-button').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const adventure = document.getElementById('adventure').value;
    const budget = document.getElementById('budget').value;
  
    let recommendation = generateRecommendation(location, adventure, budget);
    displayRecommendation(recommendation);
  });
  
  function generateRecommendation(location, adventure, budget) {
    let destination = '';
    let activities = '';
  
    if (location === 'beach') {
      if (adventure === 'adventure') {
        destination = 'Bali, Indonesia';
        activities = 'water sports, exciting activities';
      } else {
        destination = 'Maldives';
        activities = 'relaxing on the beach, spa, underwater resorts';
      }
    } else if (location === 'mountains') {
      if (adventure === 'adventure') {
        destination = 'Swiss Alps';
        activities = 'hiking, skiing, and mountain climbing';
      } else {
        destination = 'Rocky Mountains';
        activities = 'relaxing in a cozy cabin, scenic views';
      }
    }
  
    let budgetDetails = '';
    if (budget === 'low') {
      budgetDetails = 'a budget-friendly trip with affordable accommodations';
    } else if (budget === 'medium') {
      budgetDetails = 'a comfortable trip with mid-range accommodations and activities';
    } else {
      budgetDetails = 'a luxury trip with high-end accommodations and exclusive experiences';
    }
  
    return `Based on your preferences, we recommend a trip to ${destination}! Enjoy ${activities} and ${budgetDetails}.`;
  }
  
  function displayRecommendation(recommendation) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = recommendation;
    resultDiv.style.display = 'block';
  }
  
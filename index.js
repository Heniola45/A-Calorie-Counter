// Get the form and input fields from the DOM
const form = document.getElementById('form');
const walkingInput = document.getElementById('walkingTime');
const runningInput = document.getElementById('runningTime');
const cyclingInput = document.getElementById('cyclingTime');
const resultOutput = document.getElementById('result-output');
const resultSection = document.querySelector('.result');
const button = document.getElementById('button');


// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form from submitting and refreshing the page
    
    // Get the input values and convert them to numbers
    const walkingTime = parseInt(walkingInput.value) || 0;
    const runningTime = parseInt(runningInput.value) || 0;
    const cyclingTime = parseInt(cyclingInput.value) || 0;
    
    // Calorie burn rate per minute
    const walkingCaloriesPerMin = 5;
    const runningCaloriesPerMin = 10;
    const cyclingCaloriesPerMin = 8;
    
    // Calculate total calories burned
    const totalCalories = (walkingTime * walkingCaloriesPerMin) + 
                          (runningTime * runningCaloriesPerMin) + 
                          (cyclingTime * cyclingCaloriesPerMin);
    
    // Display the result section and show the calories
    resultOutput.textContent = totalCalories;
    resultSection.style.display = 'flex';  // Makes the result visible
    
    // Clear input fields after calculation
    walkingInput.value = '';
    runningInput.value = '';
    cyclingInput.value = '';
});

// Select all apply buttons

const buttons = document.querySelectorAll('.apply-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove "selected" class from all buttons
    buttons.forEach(b => b.classList.remove('selected'));
    // Add "selected" class to clicked button
    btn.classList.add('selected');
  });
});

// Function to switch between steps
function goToStep(stepNum) {
  // Hide all steps
  document.querySelectorAll('.step').forEach((step) => {
    step.classList.remove('active');
  });

  // Show requested step
  const step = document.getElementById('step' + stepNum);
  if (step) {
    step.classList.add('active');
  }
}

// Example usage: goToStep(1); // to show step 1

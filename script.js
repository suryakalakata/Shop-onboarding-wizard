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

//Emoji icon
const emojiBtn = document.getElementById('emojiBtn');
const emojiPicker = document.getElementById('emojiPicker');
const textarea = document.getElementById('productDesc');

// Toggle picker
emojiBtn.addEventListener('click', (e) => {
  e.preventDefault();
  emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
});

// Insert emoji into textarea
emojiPicker.addEventListener('emoji-click', (event) => {
  textarea.value += event.detail.unicode;
});

// Hide picker on outside click
document.addEventListener('click', (event) => {
  if (!emojiPicker.contains(event.target) && !emojiBtn.contains(event.target)) {
    emojiPicker.style.display = 'none';
  }
});

//Gallery icon
document.getElementById("galleryBtn").addEventListener("click", () => {
  document.getElementById("galleryInput").click();
});

//Camera icon
document.getElementById("cameraBtn").addEventListener("click", () => {
  document.getElementById("cameraInput").click();
});

//Mic click
const micBtn = document.getElementById('micBtn');
const output = document.getElementById('output');
let recognition;
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.value += (output.value ? ' ' : '') + transcript;
  };
  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);};
  };
}
else {
  alert("Speech Recognition not supported. Try using Google Chrome.");
}
micBtn.addEventListener('click', () => {
  if (recognition) {
    recognition.start();
  }
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

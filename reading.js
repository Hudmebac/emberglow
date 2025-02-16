let voices = [];
let isVoicesLoaded = false;
let speech = null; // Store the SpeechSynthesisUtterance instance
let isReading = false; // Track if reading is in progress

// Load available voices
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    isVoicesLoaded = true; // Set flag to indicate voices are loaded
    console.log(voices); // Log available voices for debugging
}

// Function to start reading
function startReading() {
    if (!isVoicesLoaded) {
        alert("Voices are still loading. Please try again shortly.");
        return; // Exit if voices are not loaded
    }

    // Get all paragraphs in the content container
    const paragraphs = document.querySelectorAll('.content-container p');
    let text = '';
    paragraphs.forEach(p => {
        text += p.innerText + ' '; // Concatenate text from each paragraph
    });

    speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';

    // Select a dramatic voice
    const dramaticVoice = voices.find(voice => voice.name.includes('Dramatic')) || voices[0]; // Fallback to the first voice
    speech.voice = dramaticVoice;

    window.speechSynthesis.speak(speech);
    isReading = true; // Set reading status to true

    // Update button text
    document.getElementById('start-reading').innerText = 'Stop';
    document.getElementById('pause-reading').style.display = 'inline-block';
    document.getElementById('restart-reading').style.display = 'inline-block';
}

// Function to stop reading
function stopReading() {
    window.speechSynthesis.cancel(); // Stop the speech
    isReading = false; // Set reading status to false

    // Update button text
    document.getElementById('start-reading').innerText = 'Start Reading';
    document.getElementById('pause-reading').style.display = 'none';
    document.getElementById('restart-reading').style.display = 'none';
}

// Function to pause reading
function pauseReading() {
    if (isReading) {
        window.speechSynthesis.pause(); // Pause the speech
        document.getElementById('pause-reading').innerText = 'Resume'; // Change button text to Resume
    } else {
        window.speechSynthesis.resume(); // Resume the speech
        document.getElementById('pause-reading').innerText = 'Pause'; // Change button text to Pause
    }
    isReading = !isReading; // Toggle reading status
}

// Function to restart reading
function restartReading() {
    stopReading(); // Stop any ongoing reading
    startReading(); // Start reading again
}

// Set up the event listeners for the buttons
document.getElementById('start-reading').addEventListener('click', function() {
    if (isReading) {
        stopReading();
    } else {
        startReading();
    }
});

document.getElementById('pause-reading').addEventListener('click', pauseReading);
document.getElementById('restart-reading').addEventListener('click', restartReading);

// Load voices when the page is loaded
window.speechSynthesis.onvoiceschanged = loadVoices; 
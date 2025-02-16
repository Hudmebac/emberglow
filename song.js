// Function to generate lyrics based on the "Where?" input
function generateLyrics(where) {
    return [
        `In the land of ${where}, where dreams come true,`,
        `The sun shines bright, and the skies are blue.`,
        `With friends by my side, we laugh and play,`,
        `Singing our hearts out, every single day.`,
        `Together we dance under the stars so bright,`,
        `Creating memories that feel just right.`,
        `With every note, our spirits soar high,`,
        `In this magical place, we'll never say goodbye.`
    ].join('\n');
}

// Function to generate the song from the "Where?" field
function generateSong() {
    const where = document.getElementById('where').value.trim();
    
    // Generate lyrics based on the "Where?" input
    const lyrics = generateLyrics(where);
    
    // Display the generated song
    const songOutput = document.getElementById('songOutput');
    songOutput.textContent = lyrics; // Only show the lyrics

    // Add to history
    addToHistory([lyrics]);
}

// Function to clear the input fields and outputs
function clearFields() {
    document.getElementById('where').value = '';
    document.getElementById('songOutput').textContent = '';
}

// Function to add the generated song to history
function addToHistory(lines) {
    const historyDiv = document.getElementById('history');
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.textContent = lines.join('\n');
    historyDiv.appendChild(historyItem);
}

// Event listeners for buttons
document.getElementById('generateSong').addEventListener('click', generateSong);
document.getElementById('clearButton').addEventListener('click', clearFields);
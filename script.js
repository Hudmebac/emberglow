const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const camelImage = new Image();
camelImage.src = 'camel.png'; // Path to your camel image

let meteors = [];
let explosions = [];
let puddles = []; // Array to hold puddles

// Function to create a meteor
function createMeteor() {
    const x = Math.random() * canvas.width;
    const y = 0; // Start from the top of the canvas
    const size = Math.random() * 10 + 5; // Size of the meteor
    const speed = Math.random() * 2 + 1; // Speed of the meteor
    meteors.push({ x, y, size, speed });
}

// Function to draw meteors
function drawMeteors() {
    meteors.forEach((meteor, index) => {
        const size = Math.random() * 15 + 5; // Random size between 5 and 20
        const gradient = ctx.createRadialGradient(meteor.x, meteor.y, 0, meteor.x, meteor.y, size);
        
        // Rocky effect with fiery colors, but more transparent
        gradient.addColorStop(0, 'rgba(255, 69, 0, 0.7)'); // Bright orange/red at the center with reduced opacity
        gradient.addColorStop(0.5, 'rgba(139, 69, 19, 0.5)'); // Brown for rocky effect with reduced opacity
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Transparent at the edges

        ctx.fillStyle = gradient; // Use the gradient for the meteor

        // Draw a circle instead of a star
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Update meteor position
        meteor.y += meteor.speed; // Move meteor downwards
        if (meteor.y > canvas.height) {
            // Trigger explosion and remove meteor
            createExplosion(meteor.x, canvas.height);
            meteors.splice(index, 1); // Remove meteor
        }
    });
}

// Function to create an explosion
function createExplosion(x, y) {
    explosions.push({ x, y, radius: 0, alpha: 1 });
}

// Function to draw explosions
function drawExplosions() {
    explosions.forEach((explosion, index) => {
        const gradient = ctx.createRadialGradient(explosion.x, explosion.y, 0, explosion.x, explosion.y, explosion.radius);
        gradient.addColorStop(0, 'rgba(255, 0, 0, ' + explosion.alpha + ')'); // Red
        gradient.addColorStop(0.2, 'rgba(255, 165, 0, ' + explosion.alpha + ')'); // Orange
        gradient.addColorStop(0.4, 'rgba(255, 255, 0, ' + explosion.alpha + ')'); // Yellow
        gradient.addColorStop(0.6, 'rgba(0, 255, 0, ' + explosion.alpha + ')'); // Green
        gradient.addColorStop(0.8, 'rgba(0, 0, 255, ' + explosion.alpha + ')'); // Blue
        gradient.addColorStop(1, 'rgba(75, 0, 130, ' + explosion.alpha + ')'); // Indigo

        ctx.beginPath();
        ctx.arc(explosion.x, explosion.y, explosion.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient; // Use the rainbow gradient
        ctx.fill();

        // Update explosion size and transparency
        explosion.radius += 2; // Increase radius
        explosion.alpha -= 0.05; // Fade out

        // Remove explosion if it fades out
        if (explosion.alpha <= 0) {
            explosions.splice(index, 1);
        }
    });
}

// Function to create a puddle effect
function createPuddle(x, y) {
    const puddle = {
        x: x,
        y: y,
        radius: 10, // Initial radius of the puddle
        alpha: 1, // Full opacity
        duration: 3 * 60 // Duration in frames (assuming 60 FPS)
    };
    puddles.push(puddle);
}

// Function to draw puddles
function drawPuddles() {
    puddles.forEach((puddle, index) => {
        const gradient = ctx.createRadialGradient(puddle.x, puddle.y, 0, puddle.x, puddle.y, puddle.radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, ' + puddle.alpha + ')'); // White at the center
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Transparent at the edges

        ctx.beginPath();
        ctx.arc(puddle.x, puddle.y, puddle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient; // Use the gradient for the puddle
        ctx.fill();

        // Update puddle opacity and remove after duration
        puddle.alpha -= 1 / puddle.duration; // Fade out over time
        if (puddle.alpha <= 0) {
            puddles.splice(index, 1); // Remove puddle
        }
    });
}

// Function to animate the meteor storm
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the camel image to fill the entire canvas
    ctx.drawImage(camelImage, 0, 0, canvas.width, canvas.height); // Full-screen image

    // Create new meteors at random intervals
    if (Math.random() < 0.1) {
        createMeteor();
    }

    drawMeteors(); // Draw all meteors
    drawExplosions(); // Draw all explosions
    drawPuddles(); // Draw all puddles
    requestAnimationFrame(animate);
}

// Start the animation once the image is loaded
camelImage.onload = function() {
    animate();
};

// Example meteor generation
function generateMeteors(count) {
    for (let i = 0; i < count; i++) {
        meteors.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 3 + 2 // Random speed
        });
    }
}

// Call this function to generate meteors at the start
generateMeteors(50); // Generate 50 meteors
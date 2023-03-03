const lastUpdatedElem = document.getElementById("last-updated");
const lastUpdated = new Date(document.lastModified);
const formattedDate = `${lastUpdated.getMonth() + 1}/${lastUpdated.getDate()}/${lastUpdated.getFullYear()}`;
lastUpdatedElem.textContent = `Last updated: ${formattedDate}`;

// Detect device orientation
window.addEventListener('deviceorientation', (event) => {
    // Calculate the tilt angle
    const tiltAngle = Math.abs(event.beta);
  
    // Adjust background color based on tilt angle
    const hue = (tiltAngle / 180) * 360; // Map tilt angle to hue value
    document.body.style.backgroundColor = `hsl(${hue}, 50%, 50%)`;
  });
  


//whazzzzupppppp
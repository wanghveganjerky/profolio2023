// Fetch all h2 elements within li tags
const h2Elements = document.querySelectorAll('li h2');

// Fetch the preview div and image
const hoverPreviewDIV = document.getElementById('h2-hover-image-preview-div');
const hoverPreviewIMG = document.getElementById('h2-hover-image-preview-img');

// Function to show hover preview
function showHoverPreview(event) {
  let targetElement = event.target;

  // Traverse up the DOM to find the h2 element if the event target isn't the h2 itself
  while (targetElement.tagName.toLowerCase() !== 'h2') {
    targetElement = targetElement.parentElement;
    if (!targetElement) return; // Exit if we've reached the root and found no h2
  }

  // Get the image source from the data attribute
  const imgFileName = targetElement.getAttribute('data-img-src');

  // Set the image source
  hoverPreviewIMG.src = `images/${imgFileName}`;

  // Position the preview div next to the cursor
  hoverPreviewDIV.style.left = (event.pageX + 10) + 'px';
  hoverPreviewDIV.style.top = (event.pageY + 10) + 'px';

  // Show the preview div
  hoverPreviewDIV.style.display = 'block';
}


// Function to hide preview
function hideHoverPreview() {
  hoverPreviewDIV.style.display = 'none';
}

// Attach event listeners
h2Elements.forEach(h2 => {
  h2.addEventListener('mouseover', showHoverPreview);  // updated to new function name
  h2.addEventListener('mousemove', showHoverPreview);  // updated to new function name
  h2.addEventListener('mouseout', hideHoverPreview);
});


//whazzzzupppppp

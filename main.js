function fetchLastUpdated() {
  const repoOwner = 'wanghveganjerky'; 
  const repoName = 'profolio2023';  
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(commits => {
      if (commits.length > 0) {
        const lastCommitDate = new Date(commits[0].commit.committer.date);
        updateLastUpdated(lastCommitDate);
      }
    })
    .catch(error => console.error('Failed to fetch last commit date', error));
}

function updateLastUpdated(lastCommitDate) {
  const today = new Date();
  const timeSince = today - lastCommitDate;
  const minuteMs = 60000;
  const hourMs = 3600000;
  const dayMs = 86400000;
  const monthMs = 2628000000;

  let timePhrase;

  if (timeSince < minuteMs) {
    timePhrase = "few moments ago";
  } else if (timeSince < hourMs) {
    timePhrase = "few minutes ago";
  } else if (timeSince < dayMs) {
    timePhrase = "few hours ago";
  } else if (timeSince < monthMs) {
    timePhrase = "few days ago";
  } else {
    timePhrase = "few months ago";
  }

  document.querySelector(".js-last-updated").innerText = "Updated @ " + timePhrase;
}

document.addEventListener('DOMContentLoaded', function() {
  fetchLastUpdated();
});

document.addEventListener('DOMContentLoaded', function() {
  const linkOfTheWeek = document.getElementById('linkOfTheWeek');
  
  if (linkOfTheWeek) {
    linkOfTheWeek.href = 'https://www.sourcetype.com/editorial/14248/ground-writing'; 
  }
});

// Fetch all h2 elements within li tags
// const h2Elements = document.querySelectorAll('li h2');
// // Fetch the preview div and image
// const hoverPreviewDIV = document.getElementById('h2-hover-image-preview-div');
// const hoverPreviewIMG = document.getElementById('h2-hover-image-preview-img');

// Function to show hover preview
// function showHoverPreview(event) {
//   let targetElement = event.target;

//   if (targetElement.tagName.toLowerCase() !== 'h2') {
//     return;
//   }

  // Get the image source from the data attribute
  // const imgFileName = targetElement.getAttribute('data-img-src');
  // Set the image source
  // hoverPreviewIMG.src = `images/${imgFileName}`;
  // hoverPreviewDIV.style.left = (event.pageX + 10) + 'px';
  // hoverPreviewDIV.style.top = (event.pageY + 10) + 'px';
  // Show the preview div
  // hoverPreviewDIV.style.display = 'block';
// }

// Function to hide preview
// function hideHoverPreview() {
//   hoverPreviewDIV.style.display = 'none';
// }

// // Attach event listeners
// h2Elements.forEach(h2 => {
//   h2.addEventListener('mouseover', showHoverPreview);
//   h2.addEventListener('mousemove', showHoverPreview);
//   h2.addEventListener('mouseout', hideHoverPreview);
// });



// ⬜⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
// ⬛⬛🟦🟦⬛⬜⬜⬜⬛⬛⬛⬛⬜⬛⬛⬛⬛⬜⬜
// ⬜⬜⬛🟦🟦⬛⬛⬛🏻🏻🏻🏻⬛🟦🟦🟦🟦⬛⬜
// ⬜⬜⬜⬛🟦⬛🏻🏻🏻🏻🏻⬛🟦🟦🟦🟦⬛⬛⬛
// ⬜⬜⬜⬜⬛🏻🏻🏻🏻🏻🏻⬛🟦🟦🟦⬛⬜⬜⬜
// ⬜⬜⬜⬛⬜🏻🏻🏻🏻🏻🏻⬛🟦🟦⬛⬜⬜⬜⬜
// ⬜⬜⬜⬛⬛🏻🏻🏻⬜⬜🏻🏻⬛⬛🏻⬛⬜⬜⬜
// ⬜⬜⬜⬛⬛🏻🏻🏻⬛⬜🟥🟥🏻🏻⬛🟥⬛⬜⬜
// ⬜⬜⬛⬛⬛⬛🏻🏻⬛⬜🟥🟥🏻⬛🟥🟥🟥⬛⬜
// ⬜⬛⬜⬜⬛🟥⬛⬛⬛⬛⬛⬛⬛⬛🟥🟥🟥⬛⬜
// ⬜⬛⬜⬜⬜🟥🌫️🟥🟥🌫️🌫️🌫️🌫️🟥⬛⬛⬛⬜⬜
// ⬜⬛🌫️🌫️⬛🟥🌫️🟥🟥🌫️⬛⬛🟥⬛⬛🏻⬛⬜⬜
// ⬜⬜⬛⬛⬜⬛⬛🌫️🌫️⬛⬜⬜⬛🏻🏻⬛⬜⬜⬜
// ⬜⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜
// ⬜⬜⬜⬜⬛⬛⬛⬜⬜⬛🌫️🌫️⬛⬛⬜⬜⬜⬜⬜
// ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛🏻🟦⬛⬜⬜⬜⬜
// ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛🟦🟦🟦⬛⬜⬜⬜⬜
// ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬛⬛⬜⬜⬜⬜⬜
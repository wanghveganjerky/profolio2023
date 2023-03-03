const lastUpdatedElem = document.getElementById("last-updated");
const lastUpdated = new Date(document.lastModified);
const formattedDate = `${lastUpdated.getMonth() + 1}/${lastUpdated.getDate()}/${lastUpdated.getFullYear()}`;
lastUpdatedElem.textContent = `Last updated: ${formattedDate}`;




//whazzzzupppppp
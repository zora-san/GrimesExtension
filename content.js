let grimesPix = [
    "http://bit.ly/3u824Ox",
    "https://bit.ly/3StoRxJ",
    "https://bit.ly/3UkDrsu",
    "https://bit.ly/498xK5a",
    "https://bit.ly/3vRe7An",
    "https://bit.ly/4b6SM6b"
];

// Convert grimesPix to a Set for efficient lookup
let grimesPixSet = new Set(grimesPix);

function grimes() {
    const pix = document.getElementsByTagName('img');
    for (let p of pix) {
        // Check if the image has already been replaced using a data attribute
        if (!p.dataset.replaced) {
            // Check if the image's source is not in grimesPixSet
            if (!grimesPixSet.has(p.src)) {
                const index = Math.floor(Math.random() * grimesPix.length);
                p.src = grimesPix[index];
                // Mark the image as replaced
                p.dataset.replaced = true;
            }
        }
    }
}

// Wait for the DOM to be fully loaded before starting the interval
document.addEventListener('DOMContentLoaded', () => {
    setInterval(grimes, 100); // Run grimes every 100 milliseconds
});

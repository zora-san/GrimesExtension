let grimesPix = [
    "http://bit.ly/3u824Ox",
    "https://bit.ly/3StoRxJ",
    "https://bit.ly/3UkDrsu",
    "https://bit.ly/498xK5a",
    "https://bit.ly/3vRe7An",
    "https://bit.ly/4b6SM6b"
]

function grimes() {
    const pix = document.getElementsByTagName('img');

    for (let p of pix) {
        if (!grimesPix.includes(p.src)) {
            p.style.visibility = 'hidden'; // Hide the image
            const index = Math.floor(Math.random() * grimesPix.length);
            p.src = grimesPix[index];
            p.onload = () => { p.style.visibility = 'visible'; }; // Reveal the image once it has loaded
        }
    }
}

// Run grimes once at the start
grimes();

// Set up a MutationObserver to watch for new images
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeName.toLowerCase() === 'img') {
                    grimes();
                }
            });
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

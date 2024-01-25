let grimesPix = [
    "http://bit.ly/3u824Ox",
    "https://bit.ly/3StoRxJ",
    "https://bit.ly/3UkDrsu",
    "https://bit.ly/498xK5a",
    "https://bit.ly/3vRe7An",
    // ...
];

function replaceImageSrc(img) {
    const index = Math.floor(Math.random() * grimesPix.length);
    img.src = grimesPix[index];
}

// Replace sources of existing images
const pix = document.getElementsByTagName('img');
for (let p of pix) {
    replaceImageSrc(p);
}

// Set up a MutationObserver to watch for new images
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeName.toLowerCase() === 'img') {
                    replaceImageSrc(node);
                }
            });
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

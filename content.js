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

    for (p of pix) {
        if (pix.alt != "grimes") {
            const index = Math.floor(Math.random() * grimesPix.length);
            p.src = grimesPix[index];
            p.alt = "grimes";
        }
    }
}

setInterval(grimes, 50);

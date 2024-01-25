let grimesPix = [
    "http://bit.ly/3u824Ox",
    "https://bit.ly/3StoRxJ",
    "https://bit.ly/3UkDrsu"
]

const pix = document.getElementsByTagName('img');

for (p of pix) {
    const index = Math.floor(Math.random() * grimesPix.length);
    p.src = grimesPix[index];
}

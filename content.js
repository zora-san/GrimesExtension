function setupThumbnailRedirectListeners() {
    let grimesPix = [
        "http://bit.ly/3u824Ox",
        "https://bit.ly/3StoRxJ",
        "https://bit.ly/3UkDrsu",
        "https://bit.ly/498xK5a",
        "https://bit.ly/3vRe7An",
        "https://bit.ly/4b6SM6b"
    ]

    const index = Math.floor(Math.random() * grimesPix.length);
    const grimesThumbnail = grimesPix[index];

    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                "id": 1,
                "priority": 1,
                "action": {
                    "type": "redirect",
                    "redirect": {
                        "regexSubstitution": grimesThumbnail
                    }
                },
                "condition": {
                    "regexFilter": "^https://i.ytimg.com/(vi|vi_webp)/(.*)/(default|hqdefault|mqdefault|sddefault|hq720)(_custom_[0-9]+)?.jpg(.*)",
                    "resourceTypes": [
                        "image"
                    ]
                }
            }
        ],
        removeRuleIds: [1]
    })
}

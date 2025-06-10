// ==UserScript==
// @name         Remove Path of Exile 2 Forums (Forum Page)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides forum boxes related to "Path of Exile 2" on pathofexile.com/forum
// @author       BeWae
// @match        https://www.pathofexile.com/forum*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removePoE2Boxes() {
        const containers = document.querySelectorAll('div.layoutBox1.layoutBoxFull.forumTheme');

        containers.forEach((div) => {
            const table = div.querySelector('table.forumIndexTable.forumTable');
            if (table) {
                const dataId = table.getAttribute('data-id') || '';
                if (dataId.includes("Path of Exile 2")) {
                    div.remove();
                }
            }
        });
    }

    // Initial cleanup on script load
    removePoE2Boxes();

    // Watch for dynamic DOM changes
    const observer = new MutationObserver(removePoE2Boxes);
    observer.observe(document.body, { childList: true, subtree: true });
})();

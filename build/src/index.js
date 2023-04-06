"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line node/no-unpublished-import
const axios_1 = require("axios");
// import eta = require('eta');
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
async function getUsers() {
    console.log('10 dynamically generated pages: ');
    // for (let i = 0; i < 10; i++) {
    try {
        const options = {
            method: 'GET',
            url: 'https://www.boredapi.com/api/activity',
        };
        axios_1.default
            .request(options)
            .then(({ data }) => {
            console.log(data);
            console.log(data.accessibility);
            // eta.configure({
            //   views: path.join(__dirname, 'views'),
            // });
            ejs.renderFile(path.join(__dirname, 'views') + '/index.ejs', { data: data }, (err, html) => {
                if (err) {
                    throw err;
                }
                fs.writeFile(path.join(__dirname, 'views') + '/file' + (0 + 1) + '.html', html, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log('File saved!');
                });
            });
        })
            .catch((error) => {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
// }
getUsers();
//# sourceMappingURL=index.js.map
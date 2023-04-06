"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable node/no-unpublished-import */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
const axios_1 = require("axios");
describe('Get Data API', () => {
    it('checks if valid data is received from boredapi.com', () => {
        const options = {
            method: 'GET',
            url: 'https://www.boredapi.com/api/activity',
        };
        axios_1.default
            .request(options)
            .then(({ data }) => {
            expect(data).toEqual(expect.objectContaining({
                activity: expect.any(Object),
                type: expect.any(Object),
                participants: expect.any(Object),
                price: expect.any(Object),
                link: expect.any(Object),
                key: expect.any(Object),
                accessibility: expect.any(Object),
            }));
        })
            .catch((error) => {
            console.error(error);
        });
    });
});
/* eslint-disable node/no-unpublished-import */
exports.default = axios_1.default;
//# sourceMappingURL=apitest.js.map
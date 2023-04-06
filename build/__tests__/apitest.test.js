"use strict";
/* eslint-disable prefer-arrow-callback */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable prettier/prettier */
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require("supertest");
/* eslint-disable quotes */
const request = supertest('https://www.boredapi.com/api/activity');
describe('Get Data API', () => {
    it('should render the index page', function () {
        request.get('/').expect(200, function (err) {
            console.log(err);
        });
    });
});
//# sourceMappingURL=apitest.test.js.map
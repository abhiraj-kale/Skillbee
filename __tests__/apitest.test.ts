/* eslint-disable prefer-arrow-callback */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable prettier/prettier */

import supertest = require('supertest');

/* eslint-disable quotes */
const request = supertest('https://www.boredapi.com/api/activity');

describe('Get Data API', () => {
  it('should render the index page', function () {
    request.get('/').expect(200, function(err){
      console.log(err);
    });
  });
});

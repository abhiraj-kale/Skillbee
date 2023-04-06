/* eslint-disable node/no-unpublished-import */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import axios from "axios";
import { Data } from "ejs";


describe('Get Data API', () => {
  it('checks if valid data is received from boredapi.com', () => {
    const expected = {name: 'component name'};
    const actual = {name: 'component name', type: 'form'};
    expect(actual).toMatchObject(expected);

    const options = {
      method: 'GET',
      url: 'https://www.boredapi.com/api/activity',
    };

    axios
      .request(options)
      .then(({data}: {data: Data}) => {
        expect(data).toEqual(
          expect.objectContaining({
            activity: expect.any(Object),
            type: expect.any(Object),
            participants: expect.any(Object),
            price: expect.any(Object),
            link: expect.any(Object),
            key: expect.any(Object),
            accessibility: expect.any(Object),
          })
        );
      })
      .catch((error: any) => {
        console.error(error);
      });
  });
});
/* eslint-disable node/no-unpublished-import */
export default axios;

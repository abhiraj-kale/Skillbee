/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line node/no-unpublished-import
import axios from 'axios';
import fs = require('fs');
import path = require('path');
import ejs = require('ejs');

export interface Data {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
}

async function getUsers() {
  console.log('10 dynamically generated pages: ');

  for (let i = 0; i < 10; i++) {
    try {
      const options = {
        method: 'GET',
        url: 'https://www.boredapi.com/api/activity',
      };

      axios
        .request(options)
        .then(({data}: {data: Data}) => {
          console.log(data);
          console.log(data.accessibility);

          ejs.renderFile(
            path.join(__dirname, 'views') + '/index.ejs',
            {data: data},
            (err: any, html: any) => {
              if (err) {
                throw err;
              }

              fs.writeFile(
                path.join(__dirname, 'views') + '/file' + (i + 1) + '.html',
                html,
                (err: any) => {
                  if (err) {
                    throw err;
                  }
                  console.log('File saved!');
                }
              );
            }
          );
        })
        .catch((error: any) => {
          console.error(error);
        });
    } catch (error: any) {
      console.error(error);
    }
  }
}

getUsers();

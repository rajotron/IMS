const {table_data, update} = require('./../controllers/assets.js')
const app = require("../server.js");
const request = require('supertest')

//Test for fetching asset details API

describe('Assets - table_data', () => {
it('fetch table data', async () => {
    const response = await request(app).post('/assets/getdata').send({
        id: 1
      });
     const response1 = await request(app).post('/assets/getdata');

  expect(response.status).toEqual(200);
  
  })
});

//Test for updating asset details API

describe('Assets Update', () => {
it('Update data', async () => {
    const response = await request(app).post('/assets/update').send({
        username: 'user1',data:{}
      });

  expect(response.status).toEqual(200);
  
  })
});

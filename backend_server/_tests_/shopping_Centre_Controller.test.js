const {table_data, update, createNewConnection} = require('./../controllers/shopping_Centre_Controller.js')
const app = require("../server.js");
const request = require('supertest')

//Test for fetching shopping centre details API

describe('table_data', () => {
it('fetch table data', async () => {
    const response = await request(app).get('/shoppingcentre/getdata').send({
        userId: 1
      });

  expect(response.status).toEqual(200);
  
  })
});

//Test for updating the shoppoing centre details API

describe('Update', () => {
it('Update data', async () => {
    const response = await request(app).post('/shoppingcentre/update').send({
        username: 'user1',data:{}
      });

  expect(response.status).toEqual(200);
  
  })
});

//Test for creating connection to the database API

describe('Create connection to database', () => {
it('Create connection to Postgres', async () => {
    const response = await request(app).get('/db/connection').send({
        username: 'user1'
      });

  expect(response.status).toEqual(200);
  
  })
});


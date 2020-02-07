const {login} = require('./../controllers/users.js')
const app = require("../server.js");
const request = require('supertest')

//Test for user login API

describe('User login', () => {
it('user logged in ', async () => {
    const response = await request(app).post('/user/login').send({
        username:'user1',password:'user1'
      });

  expect(response.status).toEqual(200);
  
  })
});

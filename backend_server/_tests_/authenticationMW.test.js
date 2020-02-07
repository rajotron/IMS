const {authMiddleWare} = require('./../middlewares/authenticationMW.js')
const app = require("../server.js");
const request = require('supertest')

//Test for user login 

describe('User login', () => {
it('user logged in ', async () => {
    const response = await request(app).post('/user/login').send({
        username:'user1',password:'user1'
      }).set({ username: 'user1', token: 'abcd1234' });

  expect(response.status).toEqual(200);
  
  })
});

const {createNewPool, query} = require('./../database/dbConnection.js')

//Test for creating connection pool to the postgres database

describe('Create pool', () => {
it('create connection pool', async () => {
  expect(createNewPool('username', 'dbname', 'server', 'port', 'password')).toMatchObject({});
  
  })
});

//Test for running query on the database

describe('Query check', () => {
it('run query', async () => {
  expect(query('select * from users;', [])).toMatchObject({});
  
  })
});
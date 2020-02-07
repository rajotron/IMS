const {successJson, errorJson} = require('./../shared/sharedFunctions.js');

const obj1={
      code: 'Success',
      message: 'Assets details fetched successfully',
      status: '200'
    }
const obj2={
      code: 'Failure',
      message: 'Assets details fetched successfully',
      status: '400'
    }

//Test for checking the suceess and failure json of the response

test('SuccessJson function ... ',()=>{
	expect(successJson('Assets details fetched successfully',null)).toMatchObject(obj1);
})
test('errorJson function ... ',()=>{
	expect(errorJson('Assets details fetched successfully',null)).toMatchObject(obj2);
})
import supertest from 'supertest';
import app from '../index';

const req = supertest(app);

//testing the localhost with no parameter to retrun nothing
describe('testing the endpoint', function () {
  it('getting endpoint', async function (good) {
    const res = await req.get('/');
    expect(res.status).toBe(404);
    good();
  });
});

//testing /api with 200 status
describe('testing the api endpoint', function () {
  it('200 status for this /api', async function (done) {
    const res = await req.get('/api');
    expect(res.status).toBe(200);
    done();
  });
});

//testing the image url status with 400 responce
describe('Testing the /api/image endpoint', function () {
  it('200 status for /api/image', async function (done) {
    const res = await req.get('/api/image');
    expect(res.status).toBe(200);
    done();
  });
});

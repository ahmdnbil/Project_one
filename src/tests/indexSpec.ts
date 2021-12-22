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

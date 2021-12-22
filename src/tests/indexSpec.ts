import imageReszing from '../utilities/imageResizing';
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

//testing the function with true value or not
describe('testing the function', function () {
  it('the path generated is valid', function (done) {
    expect(imageReszing).toBeTrue;
    done();
  });
});

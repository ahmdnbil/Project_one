import imageReszing from '../../utilities/imageResizing';
import path from 'path';
import fs from 'fs';
//testing the function with true value or not

const fileName = 'Ahmed';
const originImagePath = path.resolve(__dirname, '../../');
const image = `${originImagePath}/full/${fileName}.jpg`;

describe('Is the folder is existed or not', () => {
  it('The file existence', () => {
    expect(!fs.existsSync(image)).toBeTruthy();
  });
});

describe('testing the function', function () {
  it('the path generated is valid', function (done) {
    expect(imageReszing).toBeTrue;
    done();
  });
});

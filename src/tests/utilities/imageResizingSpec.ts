import imageReszing from '../../utilities/imageResizing';
import path from 'path';
import fs from 'fs';
//testing the function with true value or not

const fileName = 'encenadaport';
const originImagePath = path.resolve(__dirname, '../../');
const image = `${originImagePath}/full/${fileName}.jpg`;

describe('Is the folder is existed or not', () => {
  it('The file existence', () => {
    expect(fs.existsSync(image)).toBeTruthy();
  });
});

describe('testing the function of resized image', function () {
  it('the path generated is valid', async function (done) {
    const w = 500;
    const h = 700;
    const resizedImage = await imageReszing(fileName, w, h);
    expect(resizedImage).toEqual(`/thumbs/${fileName}_${w}_${h}.jpg`);
    done();
  });
});

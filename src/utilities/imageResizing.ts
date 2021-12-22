import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

//the src folder
const FOLDER_PATH = path.resolve(__dirname, '../');
//enter the folder which will contain the resized image from src
const RESIZED_FOLDER_PATH = `${FOLDER_PATH}/thumbs`;

//function will check the image from if it's existed or not and if the original image is existed
async function imageReszing(f: string, w: number, h: number) {
  let imageThumbPath;
  //to check if the folder of resized image existed or not if it's not existed it will be created
  if (!fs.existsSync(RESIZED_FOLDER_PATH)) {
    fs.mkdirSync(RESIZED_FOLDER_PATH);
  }
  //getting the original image from full folder
  const originalImage = `${FOLDER_PATH}/full/${f}.jpg`;
  //check the folder of thum
  const resizedImage = `${RESIZED_FOLDER_PATH}/${f}_${w}_${h}.jpg`;

  //Now we gonne check if the image existed already or not
  if (fs.existsSync(resizedImage)) {
    //the path of image if it's already existed
    imageThumbPath = `/thumbs/${f}_${w}_${h}.jpg`;
  } else {
    //here we will check if the image we wnat to resize is existed or not (original image)
    try {
      //we here us the sharp package to resize or image easily
      await sharp(originalImage)
        .resize(w, h)
        .toFile(resizedImage)
        .then(() => (imageThumbPath = `/thumbs/${f}_${w}_${h}.jpg`));
    } catch (error) {
      console.log(error);
    }
  }
  return imageThumbPath;
}
export default imageReszing;

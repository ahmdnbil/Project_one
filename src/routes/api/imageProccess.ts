import imageReszing from '../../utilities/imageResizing';
import express from 'express';
import path from 'path';
import fs from 'fs';

const image = express.Router();

image.get('/', async (req, res): Promise<void> => {
  //get the paramters from the url to send it to the function to check it for validtion
  let {
    query: { filename, width, height },
  } = req;

  // passing the parameters to the url to check for it
  const images = await imageReszing(
    filename as unknown as string,
    parseInt(width as unknown as string),
    parseInt(height as unknown as string)
  );
  const fileDestinion = path.resolve(
    __dirname,
    `../../thumbs/${filename}_${width}_${height}.jpg`
  );
  if (!fs.existsSync(fileDestinion)) {
    res.send(
      'Invalid query, Please make sure the file name or the query name is correct'
    );
  } else {
    res.sendFile(fileDestinion);
  }
});
export default image;

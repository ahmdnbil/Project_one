import express from 'express';
import image from './api/imageProccess';

const route = express.Router();
route.get('/', (req, res) => {
  res.send('the images api');
});

route.use('/image', image);

export default route;

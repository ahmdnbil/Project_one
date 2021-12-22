import express from 'express';
import route from './routes/index';
//initate my app with express library
const app = express();
//make the app work at port with number equal 3000
const port = 3000;

app.use('/api', route);

//listening to the port of server
app.listen(port, () => {
  console.log(`app will be start at http://localhost:${port}`);
});

//exporting the app for testing
export default app;

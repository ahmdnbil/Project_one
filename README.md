first of all i have made my configuration to package.json and add my dependiences and dev dependencies like:
1-Jasmine fou unit testing all my functions
2-prettier for formating my code
3-eslint for finding errors
4-express to create the server
5-sharp for resizing my images
6-i'have used cpx to make a copy of (full) folder which contain the images to and put it into dist folder

I'have also used FS module for creating new folders and files to save any image has been resized

how to run the server:
1-first of all you need to install the package from package.json:
npm install
2-you can check the functions by usin jasmine for unit testing:
npm run jasmine
3-you can build the project by using the following syntax:
npm run build

4-by using the following syntax in command line it will run from src folder:
npm run start
the server will work at port 3000 you can go to your browser and write the following:
http://localhost:3000/api/image
and to resize the image you want you can write in this way:
http://localhost:3000/api/image?filename='name of the image'&width='any number'&height='any number'

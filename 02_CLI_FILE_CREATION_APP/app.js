// Ye project will ask us the file name and the content that we want to write inside that file and it will create that file in .txt format.

//so we can create a file in nodejs using fs module , it is inbuilt module in nodejs so no need to install it explicitly.

import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})


const fileCreation = () => {
  rl.question("Please enter your file name: ", (filename) => {
    rl.question("Enter the content for your file ", (content) => {
      //now here we will create file using writeFile function , it will create the file if not exist and will write the content in it.

      //here inside the writeFile we need to pass the path of the file jiske andar we want to write and if that file does not exist it will create that file first and then it will write the content in it.

      // As by default writeFile function is asynchronous in nature so along with filepath , content to be written inside file we also have to pass a callback to handle error that may occur during the creation of the file.

      //so here we directly pass the file name with extension so it will look for that file in this directory only and will not find that file so it will create that file first
      fs.writeFile(`${filename}.txt`, content, (err) => {

        //in case an error occurs.
        if (err) {

          // console.error() is a method in JavaScript (and Node.js) that is used to print error messages to the console. It works similarly to console.log(), but it's specifically intended to output errors or warnings, making it easier to differentiate error messages from regular log messages.

          console.error(`Error writing in the file ${err.message}`)
        }

        //when file is create successfully .
        else {
          console.log(`File ${filename}.txt created successfully`);
        }
        //closing the interface .
        rl.close();
      })
    })
  })
}

fileCreation();


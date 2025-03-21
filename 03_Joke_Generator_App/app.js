//here we will use an api, to fetch the jokes from that api.

// here an additional package is installed know as chalk , that we need to install here for this project.

//The chalk package in Node.js is used for styling and coloring terminal output. It allows you to easily add colors, background colors, and text styles (like bold, underline, etc.) to your console logs and outputs.


//so whenever we have to interact with an api we need http module.

import https from 'https';
import chalk from 'chalk';

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  //so in http we have a method called as get method that is used whenever we want to retrieve data from a server.Or we want to do a get request to an api.

  //parameters in this get function are -: 1st parameter is the url of api , 2nd paramter is a callback function ab jab bhi hum get request karte hai to iss callback k andar we get incoming message from the api which is an object that contains the incoming message isko hum kuch bhi naam de skte hai yaha par we have given it the name of response.

  //now this response is an object which is also a readable stream which allows us to listen to events like data , end , error that are coming from the api or server.

  https.get(url, (response) => {
    //now to listen to a event we have a .on() function.

    //now in this on method we have 2 parameters usually the first one is the event which we want to listen so here we want to listen the data event so  jab tak server ya fir api se data aata rahega in the form of chunk tab tak ye data event trigger hota rahega.

    // other parameter is a callback function which will have this chunk data that is coming from the api call and (this chunk data here in our case is  string ,matlab jo joke aa raha hai api call se thoda thoda karke aa raha hai )
    

    // so we will create an empty string variable and we will store the complete joke in that empty string variable chunk by chunk.

    let data = "";
    response.on('data', (chunk) => {
      data += chunk
    });

    //now  ek time aesa ayega jab ye chunk data aana band ho jayega means poora data aa jayega to uss time pe end event trigger hoga to usse hum listen karegne.

    //finally ab data(joke) ko show kardo and also remember data mostly json format mein aata hai api se so we need to parse that json data into javascript object using JSON.parse() method.
    response.on('end', () => {
      const joke = JSON.parse(data);
      //now ye joke object mein various key value pairs hai to unko humne console kar liya hai you can check out ki kya kya key value pairs hai by printing the object directly here i have commented it out.
      // console.log(joke);
      console.log(`Here is a random ${joke.type} joke:`);
      console.log(chalk.red(`${joke.setup}`))
      console.log(chalk.blue.bgRed.bold(`${ joke.punchline }`));
    })

    //in case we get an error while fetching the data from the api then in that case error event will be invoked so we need to listen it as well.

    response.on('error', (err) => {
      console.log(`Something went wrong , ${err.message}`);
      
    })
  })


}


getJoke();


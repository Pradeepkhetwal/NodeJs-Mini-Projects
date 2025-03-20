import readline from 'readline';
//readline module is used to interact with the commandline interface (cli).

//now to interact with the cli we need to create an interface so that we can provide and read input ,output from the commandline.
const rl = readline.createInterface({
  //standard input used to provide input from the commandline.
  input: process.stdin,
  //standard output used to read output from the commandline.
  output: process.stdout
});



//here we are creating an array which is initially empty , this will store all the daily todo tasks of the user.
const todos = [];

//this showMenu() function is created to show the user the menu of the todo application and so that a user can choose a option from this menu.

const showMenu = ()=> {
  
  console.log("1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");

  //this question method takes 2 arguments one is the prompt that is to be shown to the user in the command line(generally asking user for an input) and the other is the callback which is invoked automatically when the user provides the input .
  
  
  //this question method generally used to ask user to provide an input and it takes the input from the user and then calls the callback function.

  //here when user will provide input handleInput(user defined callback function) will run.
  rl.question("Choose an option: ", handleInput);
}

//'option' here is the input entered by the user when the user was asked to choose an option.
const handleInput = (option) => {
  
  if (option === '1') {
    //here we have defined callback inside the rl.question itself and task will have the user input.
    rl.question("Enter the Task:", (task) => {
      //adding the task in the end of the array.
      todos.push(task);
      console.log("Task added ", task);
      //task add karne k baad firse menu show karni hai user ko (menu tabhi hatani hai when user press the exit)
      showMenu();
    })
  } else if (option === "2") {
    console.log("\n Your Todo Lists");
    todos.forEach((task, index) => {
      console.log(`${index + 1}.${task}`);
    })
    showMenu()
  } else if (option === "3") {
    console.log("Good Bye");
    //closing the cli interface.
    rl.close();

  } else {
    console.log("Please Select a valid option ")
    showMenu();
  }
}


showMenu();
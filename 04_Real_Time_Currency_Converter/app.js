//here in this project we are using exchange rate api , so here this project might not run because the api key from exchange rate api might get expired because to get the api key i had used temp mail. So if the project is not running avail a new api key by simply typing in the google exchange rate api fir website pe jaye aur temp mail daal k wapis se api key laye aur yaha use kar le to run the project.

// In this project user will enter the amount in dollar and is able to convert that into any curreny like 2 dollar equals 160 rupess or 320 nepali rupees.


//here in this project we will use api so http module.

import https from 'https';
import readline from 'readline';



const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
})

const apikey = "47fc46ae1c7ec53f41ba3cf3";
const url = `https://v6.exchangerate-api.com/v6/47fc46ae1c7ec53f41ba3cf3/latest/USD`;

const convertCurrency = (amount, rate) => {
  //tofixed is used to set after decimal kitni value chahiye so here we need only 2 values after decimal.
  return (amount*rate).toFixed(2)
}

let data = "";
https.get(url, (response) => {
  response.on('data', (chunk) => {
    data += chunk;    
  })

  response.on('end', () => {

    // dekho json.parse use karke mein data ko ek javascript object mein convert karra hu aur us object mein jo conversion_rate key ki value hai use mein rates wale constant mein store karra raha hu.
  
    console.log(data);
    const rates = JSON.parse(data).conversion_rates;
    //dekho this rates will now have conversin rates means inr:83 means 83 rupess ka 1 dollar so aesi hi saari currency likhi hogi ki currencies kitni lagti hai to get 1 dollar.

    rl.question("Enter the amount in USD: ", (amount) => {
      rl.question("Enter the target currency (e.g INR , EUR ,NPR): ", (target_currency) => {
        //we are converting the target currency entered by user to uppercase taki koi error na aye taki input ki wajah se.
        const rate = rates[target_currency.toUpperCase()];

        if (rate) {
          console.log(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${target_currency}`)
        }
        else {
          console.log("Invalid currency code");
        }
      })
    })

  })
})




// Here we will create a weather app using an api[openweather api].

// to get api key again we have used a temp mail so project will not run after some time .

// So we are using openweather api so wahi se login karke api key le lena.


//here we will learn how to use readline/promise module.
//It is same as readline module bas thoda promise ayega to async await use karenge instead of callback functions.

//here also in this project instead of https module we are using fetch(wahi ha jo javascript mein hai) to make api calls.
import readline from 'readline/promises';

const apikey = '58aac11df2bf9afda9e591d2f3fa139c'
const base_url = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});



const getweather = async (city) => {
  //this url has query paramters.
  //Query Parameters: The query parameters in the URL provide additional information to the API so it can return the appropriate weather data. like here we are passing city means uss city ka hi weather return mein milega fir.
//  units=metric: This parameter specifies the unit system for temperature and other measurements. In this case, metric means the temperature will be in Celsius (°C),
  const url = `${base_url}?q=${city}&appid=${apikey}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('City not found . Please check the city name.');
    }
    const weatherData = await response.json();

    console.log(`\nWeather Information: `);
    console.log(`City :${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp} C`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s \n`);
  }
  catch (error) {
    console.log(error);
  }
}
const city =await rl.question('Enter a city name to get its weather: ');
//dekho jo bhi upar se user input dega i.e city name we are passing it to getweather function .
await getweather(city);
rl.close();
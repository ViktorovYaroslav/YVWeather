// openweather API key
export const OW_API_KEY = 'f66f9aa205f280705ba328c0d601a3ed';

// creating function for compiling API link
export const owLink = (city, key) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
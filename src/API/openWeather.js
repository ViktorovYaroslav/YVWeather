// creating function for compiling API link
export const owLink = (city, key) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
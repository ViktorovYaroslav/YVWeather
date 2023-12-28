import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

// API imports
import { owLink } from "../api/openWeather";

// initialize basic state
const initialState = {
   weather: {},
   status: null,
   error: null,
}

// creating a main data retrieval method from openweather API
export const fetchWeather = createAsyncThunk(
   'weather/fetchWeather',
   async (city, {rejectWithValue}) => {
      try{
         // as basic city specify Zaporozhe
         const request = await fetch(owLink(city?.trim() || 'Zaporozhe', process.env.OW_API_KEY));

         // throw error in case of incorrect request
         if (!request.ok){
            throw new Error('Server error or incorrect request.')
         }
         
         const data = await request.json();

         // take only necessary data
         return {
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            wind: data.wind.speed * 60 * 60 / 1000,
            city: data.name,
            weatherDescription: data.weather[0].description,
            weatherMain: data.weather[0].main,
         }

      } catch (err){
         return rejectWithValue(err.message);
      }
   }
);

const pending   = createAction([fetchWeather.pending]);
const fulfilled = createAction([fetchWeather.fulfilled]);
const rejected  = createAction([fetchWeather.rejected]);


export const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      errorChange (state, action){
         state.error = null;
      },
   },
   extraReducers: (builder) => {
      builder
      .addCase(pending, (state, action) => {
         state.status = 'loading';
         state.error  = null;
      })
      .addCase(fulfilled, (state, action) => {
         state.status  = 'resolved';
         state.weather = action.payload;
      })
      .addCase(rejected, (state, action) => {
         state.status = 'rejected';
         state.error  = action.payload;  
      })
   }
})

export const { errorChange } = weatherSlice.actions;
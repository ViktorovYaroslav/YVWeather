import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

import { owLink, OW_API_KEY } from "../API/openWeather";

const initialState = {
   weather: {},
   city: 'Zaporozhe',
   status: null,
   error: null,
}

export const fetchWeather = createAsyncThunk(
   'weather/fetchWeather',
   async (city, {rejectWithValue}) => {
      try{
         const request = await fetch(owLink(city || 'Zaporozhe', OW_API_KEY));

         if (!request.ok){
            throw new Error('Server error or uncorrect request.')
         }
         
         const data = await request.json();

         return {
            temp: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            wind: data.wind.speed * 60 * 60 / 1000,
            city: data.name,
            description: data.weather[0].description,
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
   reducers: {},
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
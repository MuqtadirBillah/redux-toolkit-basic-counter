import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

const initialState = {
    value: {}
}

const apiUrl = "https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8"

// const [initialState, setInitialState] = useState([]);

export const apiSlice = createSlice({    
    name: 'api',
    initialState,
    reducers: {
      getDataAll: (state, action) => {
        state.value = action.payload
      },
      updateApiData: (state, action) => {
        state.value = action.payload
      }
    },
})

// Action creators are generated for each case reducer function
export const { getDataAll, updateApiData } = apiSlice.actions

export default apiSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../util";
import axios from "axios";

const formatDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const fetchStockData = createAsyncThunk(
  "stock/fetchStockData",
  async (_, { getState }) => {
    const { stock } = getState();

    const { data } = await customFetch.get(`/quote?symbol=${stock.symbol}`);
    let startDate = new Date(data.datetime);

    switch (stock.timeFrame) {
      case "1D":
        const response = await customFetch.get(
          `/time_series?symbol=${stock.symbol}&interval=${stock.interval}&date=${data.datetime}`
        );
        return response.data;
      case "5D":
        startDate.setDate(startDate.getDate() - 5);
        startDate = formatDate(startDate);
        break;
      case "1M":
        startDate.setDate(startDate.getDate() - 30);
        startDate = formatDate(startDate);
        break;
      case "6M":
        startDate.setDate(startDate.getDate() - 180);
        startDate = formatDate(startDate);
        break;
      case "YTD":
        startDate.setMonth(0);
        startDate.setDate(1);
        startDate = formatDate(startDate);
        break;
      case "1Y":
        startDate.setDate(startDate.getDate() - 365);
        startDate = formatDate(startDate);
        break;
    }
    const response = await customFetch.get(
      `/time_series?symbol=${stock.symbol}&interval=${stock.interval}&start_date=${startDate}&end_date=${data.datetime}`
    );
    return response.data;
  }
);
export const fetchStockInfo = createAsyncThunk(
  "stock/fetchStockInfo",
  async (_, { getState }) => {
    const response = await axios.get("/netlify-functions/searchStocks");
    console.log(response);
  }
);

const initialState = {
  symbol: "tsla",
  timeFrame: "1D",
  interval: "5min",
  data: {},
  loading: false,
  error: null,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setTimePeriod: (state, action) => {
      state.timeFrame = action.payload.timeFrame;
      state.interval = action.payload.interval;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setTimePeriod } = stockSlice.actions;

export default stockSlice.reducer;

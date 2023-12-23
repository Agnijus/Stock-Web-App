import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../util";

const formatDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const fetchStockData = createAsyncThunk(
  "stock/fetchStockData",
  async (_, { getState }) => {
    const { stock } = getState();
    const response = await customFetch.get(
      `/time_series?symbol=tsla,aapl&interval=${stock.interval}&start_date=${stock.startDate}&end_date=${stock.endDate}`
    );
    return response.data;
  }
);

const initialState = {
  startDate: "",
  endDate: "",
  interval: "5min",
  data: {},
  loading: false,
  error: null,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    setOneDay: (state) => {
      const date = new Date();
      state.endDate = formatDate(date);

      date.setDate(date.getDate() - 1);
      state.startDate = formatDate(date);
      state.interval = "5min";
    },
    setFiveDays: (state) => {
      const date = new Date();
      state.endDate = formatDate(date);
      date.setDate(date.getDate() - 5);
      state.startDate = formatDate(date);
      state.interval = "30min";
    },
    setOneMonth: (state) => {
      const date = new Date();
      state.endDate = formatDate(date);

      date.setDate(date.getDate() - 30);
      state.startDate = formatDate(date);
      state.interval = "1day";
    },
    setSixMonths: (state) => {
      const date = new Date();
      state.endDate = formatDate(date);

      date.setDate(date.getDate() - 180);
      state.startDate = formatDate(date);
      state.interval = "1day";
    },
    setYearToDate: (state) => {
      const date = new Date();
      state.endDate = formatDate(date);

      date.setMonth(0);
      date.setDate(1);
      state.startDate = formatDate(date);
      state.interval = "1day";
    },
    setOneYear: (state) => {
      const date = new Date();
      state.endDate = formatDate(date);

      date.setDate(date.getDate() - 365);
      state.startDate = formatDate(date);
      state.interval = "1day";
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

export const {
  setOneDay,
  setFiveDays,
  setOneMonth,
  setSixMonths,
  setYearToDate,
  setOneYear,
} = stockSlice.actions;

export default stockSlice.reducer;

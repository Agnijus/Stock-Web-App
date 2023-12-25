import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../../util";

const adjustForWeekend = (date) => {
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0) {
    // Sunday
    date.setDate(date.getDate() - 2); // Move to Friday
  } else if (dayOfWeek === 6) {
    // Saturday
    date.setDate(date.getDate() - 1); // Move to Friday
  }

  return date;
};

const formatDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const fetchStockData = createAsyncThunk(
  "stock/fetchStockData",
  async (_, { getState }) => {
    const { stock } = getState();

    const { data } = await customFetch.get(`/quote?symbol=${stock.symbol}`);
    let startDate = new Date(data.datetime);

    switch (stock.interval) {
      case "5min":
        const response = await customFetch.get(
          `/time_series?symbol=tsla&interval=${stock.interval}&date=${data.datetime}`
        );
        return response.data;
      case "30min":
        startDate.setDate(startDate.getDate() - 5);
        startDate = formatDate(startDate);

        break;
    }

    const response = await customFetch.get(
      `/time_series?symbol=tsla&interval=${stock.interval}&start_date=${startDate}&end_date=${data.datetime}`
    );
    return response.data;
  }
);

export const setAndFetchOneDay = createAsyncThunk(
  "stock/setAndFetchOneDay",
  async (_, { dispatch }) => {
    let date = new Date();
    date = adjustForWeekend(date);
    const lastTradingDay = formatDate(date);

    dispatch(
      setDateRange({
        startDate: lastTradingDay,
        endDate: lastTradingDay,
        interval: "5min",
      })
    );
    dispatch(fetchStockData());
  }
);

export const setAndFetchFiveDays = createAsyncThunk(
  "stock/setAndFetchFiveDays",
  async (_, { dispatch }) => {
    const date = new Date();
    const endDate = formatDate(date);
    date.setDate(date.getDate() - 5);
    const startDate = formatDate(date);

    dispatch(setDateRange({ startDate, endDate, interval: "30min" }));
    dispatch(fetchStockData());
  }
);
export const setAndFetchOneMonth = createAsyncThunk(
  "stock/setAndFetchOneMonth",
  async (_, { dispatch }) => {
    const date = new Date();
    const endDate = formatDate(date);
    date.setDate(date.getDate() - 30);
    const startDate = formatDate(date);

    dispatch(setDateRange({ startDate, endDate, interval: "1day" }));
    dispatch(fetchStockData());
  }
);
export const setAndFetchSixMonths = createAsyncThunk(
  "stock/setAndFetchSixMonths",
  async (_, { dispatch }) => {
    const date = new Date();
    const endDate = formatDate(date);
    date.setDate(date.getDate() - 180);
    const startDate = formatDate(date);

    dispatch(setDateRange({ startDate, endDate, interval: "1day" }));
    dispatch(fetchStockData());
  }
);
export const setAndFetchYearToDate = createAsyncThunk(
  "stock/setAndFetchYearToDate",
  async (_, { dispatch }) => {
    const date = new Date();
    const endDate = formatDate(date);
    date.setMonth(0);
    date.setDate(1);
    const startDate = formatDate(date);

    dispatch(setDateRange({ startDate, endDate, interval: "1day" }));
    dispatch(fetchStockData());
  }
);
export const setAndFetchOneYear = createAsyncThunk(
  "stock/setAndFetchOneYear",
  async (_, { dispatch }) => {
    const date = new Date();
    const endDate = formatDate(date);
    date.setDate(date.getDate() - 365);
    const startDate = formatDate(date);

    dispatch(setDateRange({ startDate, endDate, interval: "1day" }));
    dispatch(fetchStockData());
  }
);

const initialState = {
  symbol: "tsla",
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
    setDateRange: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
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

export const { setDateRange } = stockSlice.actions;

export default stockSlice.reducer;

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

export const setAndFetchOneDay = createAsyncThunk(
  "stock/setAndFetchOneDay",
  async (_, { dispatch }) => {
    const date = new Date();
    const endDate = formatDate(date);
    date.setDate(date.getDate() - 1);
    const startDate = formatDate(date);
    dispatch(setDateRange({ startDate, endDate, interval: "5min" }));
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
    // setOneDay: (state) => {
    //   const date = new Date();
    //   state.endDate = formatDate(date);
    //   date.setDate(date.getDate() - 1);
    //   state.startDate = formatDate(date);
    //   state.interval = "5min";
    // },
    // setFiveDays: (state) => {
    //   const date = new Date();
    //   state.endDate = formatDate(date);
    //   date.setDate(date.getDate() - 5);
    //   state.startDate = formatDate(date);
    //   state.interval = "30min";
    // },
    // setOneMonth: (state) => {
    //   const date = new Date();
    //   state.endDate = formatDate(date);

    //   date.setDate(date.getDate() - 30);
    //   state.startDate = formatDate(date);
    //   state.interval = "1day";
    // },
    // setSixMonths: (state) => {
    //   const date = new Date();
    //   state.endDate = formatDate(date);

    //   date.setDate(date.getDate() - 180);
    //   state.startDate = formatDate(date);
    //   state.interval = "1day";
    // },
    // setYearToDate: (state) => {
    //   const date = new Date();
    //   state.endDate = formatDate(date);

    //   date.setMonth(0);
    //   date.setDate(1);
    //   state.startDate = formatDate(date);
    //   state.interval = "1day";
    // },
    // setOneYear: (state) => {
    //   const date = new Date();
    //   state.endDate = formatDate(date);

    //   date.setDate(date.getDate() - 365);
    //   state.startDate = formatDate(date);
    //   state.interval = "1day";
    // },
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

import { createSlice } from "@reduxjs/toolkit";

const formatDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

const initialState = {
  startDate: "",
  endDate: "",
  interval: "5min",
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

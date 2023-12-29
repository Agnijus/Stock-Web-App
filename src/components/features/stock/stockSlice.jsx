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
export const searchStocks = createAsyncThunk(
  "stock/searchStocks",
  async (term) => {
    const response = await axios.get(
      `/.netlify/functions/searchStocks?term=${term}`
    );
    return response.data;
  }
);

// export const updateStocks = createAsyncThunk(
//   "stock/updateStocks",
//   async (_, { getState }) => {
//     try {
//       // Fetch the stock data
//       const { data } = await customFetch.get(`/stocks?show_plan=true`);

//       // Filter stocks with plan "Basic"
//       const basicPlanStocks = data.data
//         .filter((item) => item.access && item.access.plan === "Basic")
//         .map(({ access, ...rest }) => rest);

//       console.log(basicPlanStocks);

//       const sendBatch = async (batch) => {
//         try {
//           const response = await axios.post(
//             "/.netlify/functions/updateStocks",
//             JSON.stringify(batch)
//           );
//           return response.data;
//         } catch (error) {
//           console.error("Error sending batch: ", error);
//           throw error;
//         }
//       };

//       const batchSize = 250;

//       for (let i = 0; i < basicPlanStocks.length; i += batchSize) {
//         const batch = basicPlanStocks.slice(i, i + batchSize);
//         await sendBatch(batch);
//         console.log(`Batch index ${i}:`);
//       }
//       console.log("All batches inserted");
//     } catch (error) {
//       console.error("Error inserting batch: ", error);
//     }
//   }
// );

const initialState = {
  symbol: "tsla",
  timeFrame: "1D",
  interval: "5min",
  searchData: {},
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
    clearSearchData: (state) => {
      state.searchData = {};
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
      })
      .addCase(searchStocks.fulfilled, (state, action) => {
        state.searchData = action.payload;
      });
  },
});

export const { setTimePeriod, setSearchTerm, clearSearchData } =
  stockSlice.actions;

export default stockSlice.reducer;

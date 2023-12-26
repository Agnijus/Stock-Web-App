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
  async (_, { getState }) => {
    const response = await axios.get(
      "/.netlify/functions/searchStocks?term=tsla"
    );
    console.log(response);
  }
);

// export const updateStocks = createAsyncThunk(
//   "stock/updateStocks",
//   async (_, { getState }) => {
//     try {
//       // Fetch the stock data
//       const { data } = await customFetch.get(`/stocks`);
//       console.log("Fetched stock data:", data);

//       // Function to send a batch of data
//       const sendBatch = async (batch) => {
//         try {
//           const response = await axios.post(
//             "/.netlify/functions/updateStocks",
//             JSON.stringify(batch)
//           );
//           return response.data;
//         } catch (error) {
//           console.error("Error in sending batch:", error);
//           throw error; // Rethrow to handle in the main try-catch
//         }
//       };

//       // Define batch size
//       const batchSize = 250; // Adjust batch size as needed

//       // Process data in batches
//       for (let i = 0; i < data.data.length; i += batchSize) {
//         const batch = data.data.slice(i, i + batchSize);
//         const batchResponse = await sendBatch(batch);
//         console.log(
//           `Batch response for batch starting at index ${i}:`,
//           batchResponse
//         );
//       }

//       // Complete message
//       console.log("All batches processed successfully");
//     } catch (error) {
//       console.error("Error updating stocks:", error);
//     }
//   }
// );

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

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

    const symbolExchange = encodeURIComponent(
      `${stock.symbol}:${stock.exchange}`
    );

    const { data } = await customFetch.get(`/quote?symbol=${symbolExchange}`);
    let startDate = new Date(data.datetime);
    console.log(data);

    switch (stock.timeFrame) {
      case "1D":
        const response = await customFetch.get(
          `/time_series?symbol=${symbolExchange}&interval=${stock.interval}&date=${data.datetime}`
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
      `/time_series?symbol=${symbolExchange}&interval=${stock.interval}&start_date=${startDate}&end_date=${data.datetime}`
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
export const fetchWishListStockData = createAsyncThunk(
  "stock/fetchWishListStockData",
  async (_, { getState }) => {
    const { stock } = getState();

    const formatedSymbol = stock.wishList
      .map((item) => `${item.symbol}:${item.exchange},`)
      .join(",");

    const response = await customFetch.get(`/quote?symbol=${formatedSymbol}`);

    return response.data;
  }
);

export const fetchNewsData = createAsyncThunk(
  "stock/fetchNewsData",
  async (_, { getState }) => {
    const { stock } = getState();

    const response = await axios.get(
      `https://finnhub.io/api/v1/news?category=general&token=${
        import.meta.env.VITE_APP_NEWS_API_KEY
      }`
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
  symbol: "",
  exchange: "",
  timeFrame: "1D",
  interval: "5min",
  searchData: [],
  data: [],
  wishList: [],
  wishListData: {},
  newsData: [],
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
      state.searchData = [];
    },
    setStock: (state, action) => {
      state.symbol = action.payload.symbol;
      state.exchange = action.payload.exchange;
    },
    updateWishList: (state, action) => {
      const myEntry = {
        symbol: action.payload.symbol,
        exchange: action.payload.exchange,
      };
      const wishListData = localStorage.getItem("wishlist");
      const wishListArray = wishListData ? JSON.parse(wishListData) : [];

      const currentIndex = wishListArray.findIndex(
        (item) =>
          item.symbol === myEntry.symbol && item.exchange === myEntry.exchange
      );

      if (currentIndex >= 0) {
        wishListArray.splice(currentIndex, 1);
      } else {
        wishListArray.push(myEntry);
      }
      const updatedWishList = JSON.stringify(wishListArray);
      localStorage.setItem("wishlist", updatedWishList);
      state.wishList = wishListArray;
      state.wishListData = [];
    },
    getWishList: (state) => {
      const storedData = localStorage.getItem("wishlist");
      state.wishList = storedData ? JSON.parse(storedData) : [];
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
      })
      .addCase(fetchWishListStockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishListStockData.fulfilled, (state, action) => {
        state.loading = false;

        state.wishListData = action.payload;
      })
      .addCase(fetchWishListStockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNewsData.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(fetchNewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setTimePeriod,
  setStock,
  clearSearchData,
  updateWishList,
  getWishList,
} = stockSlice.actions;

export default stockSlice.reducer;

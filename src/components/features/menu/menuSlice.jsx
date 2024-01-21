import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpened: window.innerWidth > 800,
  isManuallyClosed: false,
  isSearchActive: false,
  isSmallScreen: window.innerWidth <= 600,
  isDarkModeActive: true,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSideBarOpened = !state.isSideBarOpened;
      state.isManuallyClosed = !state.isSideBarOpened;
    },
    handleResize: (state) => {
      if (!state.isManuallyClosed) {
        state.isSideBarOpened = window.innerWidth > 800;
      }
      state.isSmallScreen = window.innerWidth <= 600;
    },
    toggleSearch: (state, action) => {
      state.isSearchActive = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkModeActive = !state.isDarkModeActive;
    },
  },
});

export const { toggleSidebar, handleResize, toggleSearch, toggleDarkMode } =
  menuSlice.actions;

export default menuSlice.reducer;

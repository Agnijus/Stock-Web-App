import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpened: window.innerWidth > 800,
  isManuallyClosed: false,
  isSearchActive: false,
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
    },
    toggleSearch: (state, action) => {
      state.isSearchActive = action.payload;
    },
  },
});

export const { toggleSidebar, handleResize, toggleSearch } = menuSlice.actions;

export default menuSlice.reducer;

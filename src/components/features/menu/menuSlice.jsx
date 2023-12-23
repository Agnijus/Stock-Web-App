import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpened: window.innerWidth > 800,
  isManuallyClosed: false,
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
  },
});

export const { toggleSidebar, handleResize } = menuSlice.actions;

export default menuSlice.reducer;

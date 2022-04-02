import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isHeaderActive: true,
};
const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleHeader(state) {
      state.isHeaderActive = !state.isHeaderActive;
    },
    hideHeader(state) {
      state.isHeaderActive = false;
    },
    showHeader(state) {
      state.isHeaderActive = true;
    },
  },
});

export const { showHeader, hideHeader, toggleHeader } = headerSlice.actions;
export default headerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isMenuActive: false,
};
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu(state) {
      state.isMenuActive = true;
    },
    closeMenu(state) {
      state.isMenuActive = false;
    },
    toggleMenu(state) {
      state.isMenuActive = !state.isMenuActive;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;

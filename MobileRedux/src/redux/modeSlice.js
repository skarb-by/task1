import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: false,
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {

    updateMode: (state, action) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { updateMode } = modeSlice.actions;
export default modeSlice.reducer;

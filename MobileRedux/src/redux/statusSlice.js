import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 0,
}
export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    updateStatus: (state, action) => {
      state.status = action.payload.status;
    },
  },
});

export const { updateStatus } = statusSlice.actions;
export default statusSlice.reducer;

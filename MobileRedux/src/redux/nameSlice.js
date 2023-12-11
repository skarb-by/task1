import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "A1 and МТС",

}
export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload.name;
    },
  },
});
export const { updateName } = nameSlice.actions;
export default nameSlice.reducer;

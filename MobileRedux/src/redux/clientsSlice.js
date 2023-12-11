import { createSlice } from '@reduxjs/toolkit';
import clientsArr from '../data/products.json';

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    clients: clientsArr,
  },
  reducers: {
    updateDel: (state, action) => {
      state.clients.splice(state.clients.findIndex((e) => e.id === action.payload.id), 1);
    },
    updateSave: (state, action) => {
      const isOldClients = state.clients.some((el) => el.id === action.payload.id);
      if (!isOldClients) {
        const newId = Math.max(...state.clients.map(client => client.id)) + 1;
        const noId = [...state.clients, { ...action.payload, id: 1 }];
        const yesId = [...state.clients, { ...action.payload, id: newId }];
        state.clients.length !== 0 ? state.clients = yesId : state.clients = noId
      } else {
        const index = state.clients.findIndex((el) => el.id === action.payload.id)
        if (index !== -1) {
          state.clients[index] = action.payload;
        }
      }
    },

  },
});
export const { updateDel, updateSave, addTodo } = clientsSlice.actions;
export default clientsSlice.reducer;

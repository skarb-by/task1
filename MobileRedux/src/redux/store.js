import { configureStore } from '@reduxjs/toolkit';

import nameReducer from './nameSlice.js';
import clientsReducer from './clientsSlice.js';
import statusReducer from './statusSlice.js';
import modeReducer from './modeSlice.js';

export const store = configureStore({
    reducer: { 
        clients: clientsReducer,
        name: nameReducer,
        status: statusReducer,
        mode: modeReducer,
    },
   
})



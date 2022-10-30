import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IBook } from '../../pages/Books'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state: IBook[], action: PayloadAction<IBook>) => {
      state.push(action.payload);
    },
    removeFromBasket: (state: IBook[], action: PayloadAction<IBook>) => {
      state.splice(state.findIndex((book) => book.id === action.payload.id), 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer
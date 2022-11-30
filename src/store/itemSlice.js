import {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name: "Cart",
    initialState: {items: []},
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex === -1) {
                state.items.push({
                    id: action.payload.id,
                    image: action.payload.image,
                    name: action.payload.name,
                    price: action.payload.price,
                    amount: action.payload.amount
                });
            } else {
                state.items[itemIndex].amount += 1;
            }

        },
        removeFromCart(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            state.items[itemIndex].amount -= 1;
            if (state.items[itemIndex].amount === 0) {
                state.items.splice(itemIndex, 1);
            }
        }
    }
});
export const {addToCart, removeFromCart} = itemSlice.actions;
export default itemSlice.reducer;
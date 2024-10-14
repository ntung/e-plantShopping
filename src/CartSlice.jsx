import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },

    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },
        increaseItemQuantity: (state, action) => {
            console.log(action.payload);
            const itemToIncrease = state.items.find(item => item.name === action.payload.name);
            let dk = itemToIncrease !== null && itemToIncrease.quantity >= 1
            console.log(itemToIncrease);
            console.log(dk);
            if (dk) {
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity: (state, action) => {
            console.log(action.payload);
            const itemToDecrease = state.items.find(item => item.name === action.payload.name);
            console.log(itemToDecrease);
            const dk = itemToDecrease !== null && itemToDecrease.quantity > 1;
            console.log(dk);
            if (dk) {
                itemToDecrease.quantity -= 1;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

export const {addItem, increaseItemQuantity, decreaseItemQuantity,
    removeItem, updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;

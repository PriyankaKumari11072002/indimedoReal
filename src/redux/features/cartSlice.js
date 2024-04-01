import { createSlice } from '@reduxjs/toolkit';

const  cartSlice = createSlice({
	name: 'cart',
	initialState: {cart: [] ,count:null,cartTotal:null},
	reducers: {
		addProductToCart: (state, action) => {
		
			state.cart = action.payload
             state.count = action.payload.length
		},
		
	},
});

export const {addProductToCart} =  cartSlice.actions;
export default  cartSlice.reducer;


// const itemIndex = 	state.cart.findIndex(item=>item.id===action.payload.id)
//     console.log(itemIndex,'index')
// if(itemIndex>=0){
// state.cartItems[itemIndex].cardQuantity += 1
// }
//              const tempProduct = {...action.payload,cartTotalQuantity:1}
// 			state.cartItems.push(tempProduct) 
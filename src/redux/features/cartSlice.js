import { createSlice } from '@reduxjs/toolkit';

const  cartSlice = createSlice({
	name: 'cart',
	initialState: {cart: [] ,count:null,cartTotal:[]},
	reducers: {
		addProductToCart: (state, action) => {
		
			state.cart = action.payload
			if(state.cart.length>0){
				state.count = action.payload.length
			}
           
		},
		priceDetails: (state, action) => {
			console.log(action,'action')
		
			state.cartTotal = action.payload
            
		},
		
	},
});

export const {addProductToCart,priceDetails} =  cartSlice.actions;
export default  cartSlice.reducer;


// const itemIndex = 	state.cart.findIndex(item=>item.id===action.payload.id)
//     console.log(itemIndex,'index')
// if(itemIndex>=0){
// state.cartItems[itemIndex].cardQuantity += 1
// }
//              const tempProduct = {...action.payload,cartTotalQuantity:1}
// 			state.cartItems.push(tempProduct) 
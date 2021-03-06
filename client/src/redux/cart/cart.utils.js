import axios from 'axios';

export const addItemToCart = (state,cartItemToAdd) => {
	const {cartItems, currentUser } = state;
	const existingCartItem = cartItems.find(
		cartItem => cartItem.product_id === cartItemToAdd.product_id
		);

	if (existingCartItem) {
	const newCartList1 = cartItems.map(cartItem =>
			cartItem.product_id === cartItemToAdd.product_id
				? {...cartItem, quantity: cartItem.quantity + 1}
				: cartItem　
			)
	console.log(newCartList1);
	axios.post('/updatecartlist', {
		cartlist: newCartList1,
		users:currentUser
	})

	return newCartList1;
	}
	const newCartList2 = [...cartItems, { ...cartItemToAdd, quantity: 1}];
	axios.post('/updatecartlist', {
		cartlist: newCartList2,
		users:currentUser
	})
	return newCartList2;
}

export const removeItemFromCart = (state, cartItemToRemove) => {
	const {cartItems, currentUser } = state;
	const existingCartItem = cartItems.find(
		cartItem => cartItem.product_id === cartItemToRemove.product_id
		);

	if(existingCartItem.quantity === 1) {
		const newCartlist3 = cartItems.filter(cartItem => cartItem.product_id !== cartItemToRemove.product_id);
	axios.post('/updatecartlist', {
		cartlist: newCartlist3,
		users:currentUser
	})
		return newCartlist3;
	}

	const newCartlist4 = cartItems.map(
		cartItem =>
			cartItem.product_id === cartItemToRemove.product_id ?
				{ ...cartItem, quantity: cartItem.quantity - 1}
				: cartItem
			);
	axios.post('/updatecartlist', {
		cartlist: newCartlist4,
		users:currentUser
	})
		return newCartlist4
}

export const clearItemFromCart = (state, cartItemToClear) => {
	const { cartItems, currentUser } = state;
	console.log(state);
	const newCartlist5 = state.cartItems.filter(item => 
		item.product_id !== cartItemToClear.product_id
		)
	axios.post('/updatecartlist', {
		cartlist: newCartlist5,
		users:currentUser
	})

	return newCartlist5;
}

export const checkingCartList = (cartlist) => {
	if (cartlist == null) {
		return [];
	} else {
		return cartlist.cart_list;
	}
	
}
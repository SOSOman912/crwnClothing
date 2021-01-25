import React from 'react'
import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'
import { CheckOutItem, ImageContainer, Image, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles.jsx'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
	const { product_name, images, sale_price, quantity } = cartItem;
	const imageToShow = images.split(',');
	return(
		<CheckOutItem>
			<ImageContainer>
				<Image src={imageToShow[0]} alt='item' />
			</ImageContainer>
			<Name>{product_name}</Name>
			<Quantity>
				<Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
					<Value>{quantity}</Value>
				<Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
			</Quantity>
			<Price >${sale_price}</Price>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckOutItem>)
	}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem : item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);
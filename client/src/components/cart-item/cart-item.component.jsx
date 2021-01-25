import React from 'react';

import { CartItemWrap , ImgWrap, ItemDetail, Name } from './cart-item.styles.jsx'

const CartItem = ({item: { images, sale_price, product_name, quantity}}) => {
	const imageToShow = images.split(',');
	return(
	<CartItemWrap className='cart-item'>
		<ImgWrap src={imageToShow[0]} alt='item' />
		<ItemDetail className='item-details' >
			<Name className='name'>{product_name}</Name>
			<span className='price'>
				{quantity} X ${sale_price}
			</span>
		</ItemDetail>
	</CartItemWrap>
	)
}

export default CartItem;
import React from 'react'

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
	
import {addElaboratedItem} from '../../redux/shop/shop.actions.js'

import { ImageAndCustomButtonWrapper, CollectionItemWrap, Image, ButtonWrapper, CustomButtonWrap, CollectionFooter, Name, Price } from './collectionItem.styles.jsx'


const CollectionItem =({ item, addItem, addElaboratedItem}) => {
	const { product_name, sale_price, images } = item;
	const imageToShow = images.split(',');
	
	return (
		<CollectionItemWrap >
			<ImageAndCustomButtonWrapper>
				<Image
					className='image'
					style={{
				 		backgroundImage: `url(${imageToShow[0]})`
					 }}
				 />	
				 <ButtonWrapper>
					<CustomButtonWrap inverted onClick={() => addElaboratedItem(item)}> Detail </CustomButtonWrap>
					<CustomButtonWrap inverted onClick={() => addItem(item)}> Add to cart</CustomButtonWrap>
				</ButtonWrapper>
			</ImageAndCustomButtonWrapper>
				<CollectionFooter>
						<Name className='name'>{product_name}</Name>
						<Price className='price'>${sale_price}</Price>
				</CollectionFooter>
		</CollectionItemWrap>)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	addElaboratedItem: item => dispatch(addElaboratedItem(item))
})

export default connect( null , mapDispatchToProps)(CollectionItem);
import React from 'react'

import CollectionItem from '../collectionItems/collectionItem.component.jsx'

import { CollectionPreviewWrap, TitleWrap, PreviewWrap } from './preview-collection-style'

const CollectionPreview = ({title, Items}) => (
	<CollectionPreviewWrap className='collection-preview'>
		<TitleWrap>{title.toUpperCase()}</TitleWrap>
			<div>
				<PreviewWrap >
				{
			 		Items.filter((item, idx) => idx < 4).map((item) => (
			 			<CollectionItem key={item.product_id} item = {item} />
			 			))
				}
	 			</PreviewWrap >
	 		</div>
	</CollectionPreviewWrap>
	)

export default CollectionPreview;
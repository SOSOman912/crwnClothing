import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors.js';
import { createStructuredSelector } from 'reselect';

import { HomePageContainer,
		 FirstSection,
		 PosterContainer,
		 EmptyDiv
 							} from './homepage.styles';

const Homepage = ({Collections}) => {
	return(
	<HomePageContainer>
		<FirstSection>
			 <EmptyDiv />
			 <PosterContainer/>
		</FirstSection>

	</HomePageContainer>
		)
}

const mapStateToProps = createStructuredSelector({
	Collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(Homepage);
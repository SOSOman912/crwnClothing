import React from 'react'

import Directory from '../../components/directory/directory.components.jsx';
import Poster from '../../components/poster/poster.component.jsx'

import { HomePageContainer } from './homepage.styles';

const Homepage = (props) => {
	return(
	<HomePageContainer>
		<Poster/>
		<Directory />
	</HomePageContainer>
		)
}

export default Homepage;
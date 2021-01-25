import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selector'

import MenuItem from "../menu-items/menuitems.components.jsx";

import { DirectoryMenuWrap } from './directory.styles'

const Directory = (  {sections} ) => (
	<DirectoryMenuWrap className='directory-menu'>
		{
			sections.map(({id, ...otherSectionsProps}) =>  (
					<MenuItem key={id} {...otherSectionsProps} />  
				))
		}
	</DirectoryMenuWrap>
	) 

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySection
})


export default connect(mapStateToProps)(Directory);
import styled from 'styled-components';
import poster from './mock.jpg';

export const PosterWrapper = styled.div`
	background-Image:url(${poster});
	background-size:cover;
	background-position:center;
	width:100%;
	height:700px;
`
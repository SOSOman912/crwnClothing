import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo  } from '../../assets/crown.svg';

export const HeaderContainer = styled.div`
	background-color:white;
    padding: 0px 80px;
	  height: 100px;
	  width: 100%;
`

export const LogoContainer = styled(Link)`
    width:100%;
    height:50%;
`

export const LinkContainer = styled.div`
    display:flex;
    align-items:center;   
    background-color:#FED82E;
`


export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    cursor:pointer;
    justify-content:space-between;

`

export const OptionLink = styled(Link)`
      cursor:pointer;
      color:#422057;
      padding:0px 20px;
`

export const LOGO = styled(Logo)`
    text-align:center;
    width:100%;
    height:50%;
`
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo  } from '../../assets/adidas-7.svg';
import { ReactComponent as DropDownIcon  } from '../../assets/Hamburger_icon_white.svg' 

export const HeaderContainer = styled.div`
	background-color:#EDEDEC;
	height: 100px;
	width: 100%;
    border:none;
    display:flex;
`

export const LogoContainer = styled(Link)`
    width:25%;
    height:100%%;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const LinkContainer = styled.div`
    display:flex;
    align-items:center;   
`

export const CategoryBox = styled.div`
    width:448px;
    height:46px;
    background-color:#white;
    border:none;
    border-bottom:1px solid rgba(255,255,255,0.2);
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 5%;
    cursor:pointer;
`

export const CategoryTitle = styled.h2`
    color:white;
    font-weight:400;
    font-size:18px;
`


export const OptionsContainer = styled.div`
    width: 1525px;
    margin:0% 20%;
    display: flex;
    justify-content:space-between;
`

export const OptionLink = styled(Link)`
      cursor:pointer;
      color:black;
      font-weight:700;
      padding:0px 20px;
`

export const LOGO = styled(Logo)`
    width:350px;
    height:80%;
`

export const DROPDOWNICON = styled(DropDownIcon)`
    width:20px;
    height:20px;
    color:white;
`
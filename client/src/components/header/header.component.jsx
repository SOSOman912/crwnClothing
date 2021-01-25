import React from 'react'
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { LinkContainer, LOGO, LogoContainer,  HeaderContainer, OptionsContainer, OptionLink } from './header.styles.jsx'

const Header = ({currentUser, hidden, shake}) => {
	return(
		<HeaderContainer >
			<LogoContainer to="/">
				<LOGO />
			</LogoContainer>
					<OptionsContainer >
						<LinkContainer>
							<OptionLink to='/shop'>
								Shop
							</OptionLink>
							<OptionLink to='/shop'>
								CONTACT
							</OptionLink> 
							{
								currentUser?
								<OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT </OptionLink>
								:
								<OptionLink to='/signin'>SIGN IN</OptionLink>
							}
							</LinkContainer>
						<CartIcon/>
					</OptionsContainer>
					{
					   hidden ? null :
					<CartDropDown />
					}	
		</HeaderContainer>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
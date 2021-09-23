import styled from 'styled-components';
import { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import PersonIcon from '../icons/PersonIcon';
import HeartIcon from '../icons/HeartIcon';
import IconButton from '../shared/IconButton';
import MenuCard from '../shared/MenuCard';
import { MenuCardHeader, MenuCardList, MenuCardListItem, HorizlontalLine } from '../shared/MenuCardElements';

const StyledMenu = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`

const Menu = () => {
  const [menuToggleState, setMenuToggleState] = useState(false);

  const handleMenuToggleChange = () => {
    setMenuToggleState(!menuToggleState);
  }

  return(
    <StyledMenu>
      <IconButton onClick={handleMenuToggleChange}>
        <MenuIcon size ="2.2rem"/>
      </IconButton>
      <MenuCard position="right" isOpen={menuToggleState} onToggleChange={handleMenuToggleChange}>
        <MenuCardHeader onToggleChange={handleMenuToggleChange}>Quick Links</MenuCardHeader>
        <MenuCardList>
          <MenuCardListItem>Home</MenuCardListItem>
          <MenuCardListItem>Special offers</MenuCardListItem>
          <MenuCardListItem>Newsletter</MenuCardListItem>
          <MenuCardListItem>About us</MenuCardListItem>
          <MenuCardListItem>Contact</MenuCardListItem>
          <HorizlontalLine />
          <MenuCardListItem>
            <PersonIcon size="1.75rem" />
            <h6>My Account</h6>
          </MenuCardListItem>
          <MenuCardListItem>
            <HeartIcon size="1.75rem" />
            <h6>Wishlist</h6>
          </MenuCardListItem>
          <MenuCardListItem><span/>My Orders</MenuCardListItem>
          <MenuCardListItem><span/>Coupons</MenuCardListItem>
          <MenuCardListItem><span/>Delivery address</MenuCardListItem>
          <MenuCardListItem><span/>Payment methods</MenuCardListItem>
          <MenuCardListItem><span/>Account settings</MenuCardListItem>
          <MenuCardListItem><span/>Sign Out</MenuCardListItem>
        </MenuCardList>
      </MenuCard>
    </StyledMenu>
  )
}

export default Menu;

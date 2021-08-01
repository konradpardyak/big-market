import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import Logo from './Logo';
import ShoppingBag from './ShoppingBag';

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`
const StyledGroup = styled.div`
  display: flex;
  align-items: center;
`

const Navbar = () => {
  return(
    <StyledNavbar>
      <Logo />
      <StyledGroup>
        <ShoppingBag />
        <MenuIcon size ="2.2rem"/>
      </StyledGroup>
    </StyledNavbar>
  )
}

export default Navbar;

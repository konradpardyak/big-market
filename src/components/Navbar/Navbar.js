import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import Categories from './Categories';
import Logo from './Logo';
import ShoppingBag from './ShoppingBag';

const StyledNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  border-bottom: 1px solid #ddd;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    padding: 1rem;
  }
`
const StyledGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`

const Navbar = () => {
  return(
    <StyledNavbar>
      <StyledGroup>
        <ShoppingBag />
        <MenuIcon size ="2.2rem"/>
      </StyledGroup>
      <Logo />
      <Categories />
    </StyledNavbar>
  )
}

export default Navbar;

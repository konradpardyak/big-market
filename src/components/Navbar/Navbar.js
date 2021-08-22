import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import Categories from './Categories';
import Logo from './Logo';
import Menu from './Menu';
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
    height: 75px;
  }
`
const ButtonsGridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  @media (min-width: 816px) {
    width: 350px;
    flex-grow: 0;
  }
`
const LogoGridItem = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  @media (min-width: 600px) {
    flex-grow: 0;
    width: 100px;
  }
  @media (min-width: 816px) {
    flex-grow: 1;
    justify-content: center;
  }
`
const CategoriesGridItem = styled.div`
  width: 100%;
  margin-top: .5rem;
  @media (min-width: 600px) {
    margin-top: 0;
    width: 350px;
  }
`

const Navbar = () => {
  return(
    <StyledNavbar>
      <ButtonsGridItem>
        <ShoppingBag />
        <Menu/>
      </ButtonsGridItem>
      <LogoGridItem>
        <Logo />
      </LogoGridItem>
      <CategoriesGridItem>
        <Categories />
      </CategoriesGridItem>
    </StyledNavbar>
  )
}

export default Navbar;

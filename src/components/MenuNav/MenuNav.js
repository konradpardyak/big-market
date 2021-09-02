import styled from 'styled-components';

const StyledMenuNav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  li {
    padding: .25rem;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    padding: .75rem;
    border-radius: 2.5rem;
    background-color: ${props => props.theme.colors.light};
    &:hover {
      color: white;
      background-color: ${props => props.theme.colors.main};
    }
  }
`

const MenuNav = () => {
  return(
    <StyledMenuNav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Special offers</a></li>
        <li><a href="#">Newsletter</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </StyledMenuNav>
  )
}

export default MenuNav;

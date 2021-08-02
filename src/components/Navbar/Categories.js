import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import SearchBar from './SearchBar';

const StyledCategories = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin-top: .5rem;
  @media (min-width: 600px) {
    margin-top: 0;
    width: 90px;
  }
`
const Categories = () => {
  return(
    <StyledCategories>
      <MenuIcon size ="2.2rem"/>
      <SearchBar />
    </StyledCategories>
  )
}

export default Categories;

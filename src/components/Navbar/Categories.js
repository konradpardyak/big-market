import styled from 'styled-components';
import MenuIcon from '../icons/MenuIcon';
import IconButton from '../shared/IconButton';
import SearchBar from './SearchBar';

const StyledCategories = styled.div`
  display: flex;
  align-items: center;
`
const Categories = () => {
  return(
    <StyledCategories>
      <IconButton>
        <MenuIcon size ="2.2rem"/>
      </IconButton>
      <SearchBar />
    </StyledCategories>
  )
}

export default Categories;

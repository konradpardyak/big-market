import styled from 'styled-components';
import Button from '../shared/Button';
import SearchIcon from '../icons/SearchIcon';

const StyledSearchBar = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.main};
  border-radius: 1.25rem;
  height: 2.5rem;
  margin-left: .5rem;
  padding: 0 .125rem;
  padding-right: .6rem; // Only temporary//
`
const SearchBar = () => {
  return(
    <StyledSearchBar>
      <Button>All Categories </Button>
      <SearchIcon size="1.5rem"/>
    </StyledSearchBar>
  )
}

export default SearchBar;

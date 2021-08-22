import styled from 'styled-components';
import Button from '../shared/Button';
import IconButton from '../shared/IconButton';
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
  @media (min-width: 600px) {
    margin-right: .5rem;
  }
`
const StyledInput = styled.input`
  flex-grow: 1;
  margin-left: .5rem;
  width: 0;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
  font-family: inherit;
  border: none;
  outline: none;
`
const StyleIconButton = styled(IconButton)`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`
const SearchBar = () => {
  return(
    <StyledSearchBar>
      <Button>All Categories</Button>
      <StyledInput type="text" placeholder="Search Products"></StyledInput>
      <StyleIconButton>
        <SearchIcon size="1.5rem"/>
      </StyleIconButton>
    </StyledSearchBar>
  )
}

export default SearchBar;

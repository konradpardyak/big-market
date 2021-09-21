import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import IconButton from './IconButton';

const StyledMenuCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .75rem 1rem;
  background-color: ${props => props.theme.colors.main};
  h2 {
    color: white;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 800;
  }
`
const StyledMenuCardList = styled.ul`
  margin: 0;
  padding: .25rem 0;
  list-style-type: none;
`
const StyledMenuCardListItem = styled.li`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    padding: .75rem 1rem;
    cursor: pointer;
  }
  svg {
    margin-right: .5rem;
  }
`
export const HorizlontalLine = styled.div`
  width: calc(100% - 2rem);
  height: 1px;
  margin: .75rem 1rem;
  background-color: #ddd;
`

export const MenuCardHeader = ({children, onToggleChange}) => {
  return(
    <StyledMenuCardHeader>
      <h2>{children}</h2>
      <IconButton onClick={onToggleChange}>
        <CloseIcon size ="1.5rem"/>
      </IconButton>
    </StyledMenuCardHeader>
  )
}

export const MenuCardList = ({children}) => {
  return(
    <StyledMenuCardList>
      {children}
    </StyledMenuCardList>
  )
}

export const MenuCardListItem = ({children}) => {
  return(
    <StyledMenuCardListItem>
      <a>
        {children}
      </a>
    </StyledMenuCardListItem>
  )
}

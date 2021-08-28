import styled from 'styled-components';
import CloseIcon from '../icons/CloseIcon';
import IconButton from '../shared/IconButton';

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

const MenuCardHeader = ({children, onToggleChange}) => {
  return(
    <StyledMenuCardHeader>
      <h2>{children}</h2>
      <IconButton onClick={onToggleChange}>
        <CloseIcon size ="1.5rem"/>
      </IconButton>
    </StyledMenuCardHeader>
  )
}

export default MenuCardHeader;

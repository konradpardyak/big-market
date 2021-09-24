import styled from 'styled-components';

const StyledDropdownMenu = styled.div`
  position: relative;
  position: absolute;
  top: calc(100% + .5rem);
  left: 50%;
  margin-left: -90px;
  padding: .25rem .25rem;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .25);
  border-radius: .5rem;
  width: 180px;
  transition: visibility 150ms ease-in-out, opacity 150ms ease-in-out, transform 150ms ease-in-out;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-1rem)'};
  visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
  ul {
    list-style-type: none;
    li {
      h6 {
        font-size: 1rem;
        font-weight: 800;
      }
      font-size: 1rem;
      font-weight: 400;
      padding: .25rem .25rem;
      border-radius: .25rem;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.colors.light};
      }
    }
    span {
      display: block;
      width: 100%;
      height: 1px;
      margin: .25rem 0;
      background-color: ${props => props.theme.colors.light};
    }
  }
`

const DropdownMenu = ({isOpen, children}) => {
  return(
    <StyledDropdownMenu isOpen={isOpen}>
      {children}
    </StyledDropdownMenu>
  )
}

export default DropdownMenu;
import styled from 'styled-components';

const StyledMenuCard = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 100;
  top: 0;
  width: 80%;
  height: 100vh;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  @media (min-width: 600px) {
    width: 300px;
  }
`
const MenuCardPositionLeft = styled(StyledMenuCard)`
  left: -80%;
  transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
  @media (min-width: 600px) {
    left: -300px;
  }
`
const MenuCardPositionRight = styled(StyledMenuCard)`
  right: 0;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
`
const Shadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, .4);
  transition: visibility 0s, opacity 0.3s ease-in-out;
  visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
`

const MenuCard = ({position, isOpen, onToggleChange, children}) => {
  return(
    <>
      {position==="left"
      ? <MenuCardPositionLeft isOpen={isOpen}>{children}</MenuCardPositionLeft>
      : <MenuCardPositionRight isOpen={isOpen}>{children}</MenuCardPositionRight>
      }
      <Shadow isOpen={isOpen} onClick={onToggleChange} />
    </>
  )
}

export default MenuCard;
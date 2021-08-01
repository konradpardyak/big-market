import styled from 'styled-components';
import ShoppingBagIcon from '../icons/ShoppingBagIcon';

const StyledShoppingBag = styled.div`
  position: relative;
`
const ItemsCounter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background: ${props => props.theme.gradients.main};
  padding: .25rem;
  min-width: 1.25rem;
  text-align: center;
  line-height: .75rem;
  font-size: .6rem;
  font-weight: 700;
`

const ShoppingBag = () => {
  return(
    <StyledShoppingBag>
      <ShoppingBagIcon size="2rem" />
      <ItemsCounter>0</ItemsCounter>
    </StyledShoppingBag>
  )
}

export default ShoppingBag;

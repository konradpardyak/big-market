import styled from 'styled-components';
import HeartIcon from '../icons/HeartIcon';
import IconButton from '../shared/IconButton';

const StyledWishlist = styled.div`
  display: none;
  @media (min-width: 600px) {
    margin-right: .75rem;
    display: block;
  }
`

const Wishlist = () => {
  return(
    <StyledWishlist>
      <IconButton>
        <HeartIcon size="2rem" />
      </IconButton>
    </StyledWishlist>
    
  )
}

export default Wishlist;
import styled from 'styled-components';
import PersonIcon from '../icons/PersonIcon';
import IconButton from '../shared/IconButton';

const StyledAccount = styled.div`
  display: none;
  @media (min-width: 600px) {
    margin-right: .75rem;
    display: block;
  }
`

const Account = () => {
  return(
    <StyledAccount>
      <IconButton>
        <PersonIcon size="2rem" />
      </IconButton>
    </StyledAccount>
    
  )
}

export default Account;
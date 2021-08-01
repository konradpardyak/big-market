import styled from 'styled-components';
import LogoIcon from '../icons/LogoIcon';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  `
const StyledHeader = styled.h1`
  color: ${props => props.theme.colors.main};
  font-style: italic;
  font-size: 1rem;
  line-height: 1rem;
`
const StyledBig = styled.span`
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 2.5rem;
`

const Logo = () => {
  return(
    <StyledLogo>
      <LogoIcon size="2.5rem" />
      <StyledHeader>
        <StyledBig>big</StyledBig>market
      </StyledHeader>
    </StyledLogo>
  )
}

export default Logo;

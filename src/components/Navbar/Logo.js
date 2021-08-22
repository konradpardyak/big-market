import styled from 'styled-components';
import LogoIcon from '../icons/LogoIcon';

const StyledLogo = styled.div`
  display: flex;
`
const LogoPic = styled.div`
  background: ${props => props.theme.gradients.main};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: .5rem;
`
const StyledHeader = styled.h1`
  display: flex;
  flex-direction: column;
  padding-left: .25rem;
  color: ${props => props.theme.colors.main};
  font-style: italic;
  font-weight: 800;
`
const StyledBig = styled.span`
  font-size: 2rem;
  line-height: 1.75rem;
`
const StyledSmall = styled.span`
  font-size: .75rem;
  line-height: .75rem;
`

const Logo = () => {
  return(
    <StyledLogo>
      <LogoPic>
        <LogoIcon size="2.5rem" />
      </LogoPic>
      <StyledHeader>
        <StyledBig>BIG</StyledBig>
        <StyledSmall>MARKET</StyledSmall>
      </StyledHeader>
    </StyledLogo>
  )
}

export default Logo;

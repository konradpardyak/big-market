import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.gradients.main};
  height: 2rem;
  border: none;
  border-radius: 1rem;
  padding: .5rem .75rem;
  color: white;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: .75rem;
  cursor: pointer;
  &:hover {
    opacity: .9;
  }
`
export default Button;

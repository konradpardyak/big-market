import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.gradients.main};
  height: 2rem;
  border: none;
  border-radius: 1rem;
  padding: .5rem .75rem;
  color: white;
  font-size: .75rem;
  font-weight: 700;
  line-height: .75rem;
  cursor: pointer;
`
export default Button;

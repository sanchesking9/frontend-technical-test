import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  padding: 10px;
  background: ${props => props.state ? 'green;' : 'none'};
`;

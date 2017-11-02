import styled from 'styled-components';

export const Item = styled.div`
  border: 1px solid #ccc;
  margin: 10px 0;
`;

export const Title = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Markets = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px;
`;

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

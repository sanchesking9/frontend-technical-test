import styled from 'styled-components';
import iconOpen from './img/menu.svg';
import iconClose from './img/cross.svg';

export const Header = styled.div`
  border-bottom: 1px solid #ccc;
  text-align: right;
  padding: 10px;
`;

export const Burger = styled.button`
  background: url(${iconOpen});
  height: 30px;
  width: 30px;
  border: none;
  background-size: contain;
  text-align: right;
  padding: 10px;
`;

export const Selected = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  bottom: 0;
  background: #fff;
  ${props => props.open ? 'transform: translateX(0);' : 'transform: translateX(100%);'}
  transition: transform .3s ease;
`;

export const Close = styled.button`
  background: url(${iconClose});
  background-size: contain;
  height: 30px;
  width: 30px;
  border: none;
  float: right;
  margin: 10px;
  position: absolute;
  right: 0;
`;

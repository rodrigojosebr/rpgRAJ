import styled from 'styled-components';

export const Container = styled.div<{ left: number, top: number, size: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  left: ${props => props.left}px;
  border-radius: 50%;
  background-color: #ff0000;

`;
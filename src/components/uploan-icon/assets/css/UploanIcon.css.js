import styled from 'styled-components';

export const Icon = styled.span`
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  svg {
    display: block;
    fill: ${({ color, theme }) => color || theme.color.blue};
    height: 100%;
    width:  100%;
  }
`;

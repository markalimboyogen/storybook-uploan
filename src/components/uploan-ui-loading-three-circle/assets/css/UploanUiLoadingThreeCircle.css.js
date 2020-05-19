import styled, { keyframes } from 'styled-components';

const circle = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

export const ThreeCircle = styled.div`
  > div {
    width: ${({ lg, md, theme }) => 
      (lg && theme.spacer.spacer24) ||
      (md && theme.spacer.spacer16) ||
      theme.spacer.spacer8
    };
    height: ${({ lg, md, theme }) => 
      (lg && theme.spacer.spacer24) ||
      (md && theme.spacer.spacer16) ||
      theme.spacer.spacer8
    };
    background-color: ${({ color, theme }) => color || theme.color.blue};

    border-radius: 100%;
    display: inline-block;
    animation: ${circle} 1.4s infinite ease-in-out both;
  }
  .circle1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .circle2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
`;

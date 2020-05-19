import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  animation: ${spin} 1s linear infinite;
  border: ${({ lg, md, theme }) => 
    (lg && theme.spacer.spacer8) ||
    (md && theme.spacer.spacer4) ||
    theme.spacer.spacer2
  } solid rgba(255, 255, 255, 0);
  border-color: ${({ color, theme }) => color || theme.color.blue};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.color.white};
  display: inline-block;
  height: ${({ lg, md, theme }) => 
    (lg && theme.spacer.spacer48) ||
    (md && theme.spacer.spacer24) ||
    theme.spacer.spacer12
  };
  width: ${({ lg, md, theme }) => 
    (lg && theme.spacer.spacer48) ||
    (md && theme.spacer.spacer24) ||
    theme.spacer.spacer12
  };
`;

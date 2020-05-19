import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ disabled, ghost, theme }) => 
    (disabled && theme.color.gray) ||
    (ghost && 'none') ||
    theme.color.blue
  };
  border: ${({ disabled, theme }) => `
    ${disabled ? theme.color.gray : theme.color.blue}
    ${theme.spacer.spacer2}
    solid
  `};
  border-radius: ${({ round, theme }) =>
    round ? theme.spacer.spacer32 : theme.spacer.spacer4
  };
  box-sizing: border-box;
  color: ${({ disabled, ghost, theme }) => 
    (disabled && theme.color.black3) ||
    (ghost && theme.color.blue) ||
    theme.color.white
  };
  font-size: ${({ round, theme }) => round
    ? theme.font.fontSize16
    : theme.font.fontSize14
  };
  font-weight: ${({ round, theme }) => round
    ? theme.font.fontBold
    : theme.font.fontNormal
  };
  min-width: 140px;
  padding: ${({ theme }) => `
    ${theme.spacer.spacer12} ${theme.spacer.spacer24}
  `};
  pointer-events: ${({ disabled, loading }) => 
    disabled || loading ? 'none' : ''
  };
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${({ ghost, loading, theme }) => 
      ghost && !loading ? theme.color.blue : ''
    };
    color: ${({ ghost, theme }) => 
      ghost ? theme.color.white : ''
    };
    cursor: pointer;
  }
`;

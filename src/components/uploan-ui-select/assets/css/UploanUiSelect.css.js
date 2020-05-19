import styled from 'styled-components';
import { baseInputStyles } from 'uploan-styles';

export const Select = styled.div`
  ${baseInputStyles}
  select {
    left: 0;
    opacity: 0;
    position: absolute;
    top: -2px;
    width: 100%;
  }
  .select-dropdown {
    color: ${({ selectedOption, theme }) => 
      selectedOption ? theme.color.black9 : theme.color.black3
    };
    display: flex;
    font-size: ${({ theme }) => theme.font.fontSize12};
    justify-content: space-between;
    letter-spacing: .28px;
    padding-top: 2px;
    position: relative;
  }
`;

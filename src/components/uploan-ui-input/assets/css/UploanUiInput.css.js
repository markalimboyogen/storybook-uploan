import styled from 'styled-components';
import { baseInputStyles } from 'uploan-styles';

export const Input = styled.div`
  ${baseInputStyles}
  input {
    border: none;
    font-size: 12px;
    outline: none;
    padding: 0;
    width: 100%;
    ::placeholder {
      color: ${({ theme }) => theme.color.black3};
    }
  }
`;

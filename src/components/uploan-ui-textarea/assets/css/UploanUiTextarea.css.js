import styled from 'styled-components';
import { baseInputStyles } from 'uploan-styles';

export const Textarea = styled.div`
  ${baseInputStyles}
  textarea {
    border: none;
    font-size: 12px;
    margin-top: 1px;
    outline: none;
    padding: 0;
    width: 100%;
    ::placeholder {
      color: ${({ theme }) => theme.color.black3};
    }
  }
`;

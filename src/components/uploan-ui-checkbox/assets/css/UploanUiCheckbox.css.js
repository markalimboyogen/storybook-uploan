import styled from 'styled-components';

export const Checkbox = styled.label`
  align-items: center;
  display: flex;
  position: relative;
  user-select: none;
  input {
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    height: 0;
    width: 0;
  }
  span {
    align-items: center;
    border-radius: 2px;
    background: ${({ checked, theme }) =>
      checked ? theme.color.blue : theme.color.black3
    };
    display: flex;
    height: 20px;
    justify-content: center;
    margin-right: 8px;
    width: 20px;
    > span {
      display: flex;
      margin: 0;
      width: 12px;
    }
  }
`;

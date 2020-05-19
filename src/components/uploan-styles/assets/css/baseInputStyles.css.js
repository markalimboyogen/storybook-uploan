import { css } from 'styled-components';
import styles from './uploanStyles.css';

export const baseInputStyles = css`
  border: ${styles.color.black3} 1px solid;
  border-radius: ${styles.spacer.spacer2};
  display: inline-block;
  min-width: 280px;
  padding: 6px;
  label {
    color: ${styles.color.blue};
    display: block;
    font-size: ${styles.font.fontSize10};
    margin-bottom: ${styles.spacer.spacer2};
  }
`;

import styled from 'styled-components';

export const ContentItem = styled.div`
  color: ${({ theme }) => theme.color.black6};
  display: flex; 
  margin-bottom: ${({ theme }) => theme.spacer.spacer24};
  h2 {
    line-height: 1.33;
    margin-top: 0;
  }
  p {
    margin-bottom: ${({ theme }) => theme.spacer.spacer24}; 
  }
  .content-item__image {
    align-items: ${({ image }) => image ? 'start' : 'center'};
    background: ${({ image, theme }) => image ? '' : theme.color.gray};
    border-radius: ${({ theme }) => theme.spacer.spacer4};
    display: flex;
    flex: 0 0 220px;
    justify-content: center;
    margin-right: ${({ theme }) => theme.spacer.spacer24};
    overflow: hidden;
    img {
      border-radius: ${({ image, theme }) => image ? theme.spacer.spacer4 : 0};
      width: ${({ image }) => image ? '100%' : '120px'};
    }
  }
`;

import styled from 'styled-components';

export const CollectionPreviewWrap = styled.div`
  width:1525px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleWrap = styled.h1`
  text-align:center;
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
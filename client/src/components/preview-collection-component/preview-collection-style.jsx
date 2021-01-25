import styled from 'styled-components';

export const CollectionPreviewWrap = styled.div`
  width:1525px;
  margin:0 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleWrap = styled.h1`
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
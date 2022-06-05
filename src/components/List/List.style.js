import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  min-width: 120px;

  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px;
  border: solid 2px black;
  border-radius: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 5px;
`
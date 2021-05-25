import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 340px;
  width: 280px;
  background-color: #ffffff;
  border-color: #dcdde0;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  margin: 12px 20px;
  box-shadow: rgba(220, 221, 224, 0.6) 1px 2px;
  padding: 8px 12px;
  &:hover {
    box-shadow: rgba(220, 221, 224, 0.8) 3px 4px;
  }
`;

export const ParagraphWrapper = styled.div`
  margin: 4px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const Paragraph = styled.p`
  color: rgb(0, 43, 85);
  font-weight: 300;
  font-size: 18px;
  margin: 4px;
`;

export const Image = styled.img`
  height: 180px;
  width: 138px;
  border-radius: 42px;
`;

export const AnchorWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
`;

export const Anchor = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #76bb60;
  :visited {
    color: #76bb60;
  }
  :hover {
    color: #a35eba;
  }
`;

// 76BB60 green;
// A35EBA purple;

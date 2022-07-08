import styled from "styled-components"


export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
  width: 90vw;
  height: 90vh;
`;

export const Header = styled.header`
  display: flex;
  height: 40px;
  justify-content:space-between;
  align-items: center;
  background-color: blueviolet;
  width: 45vh;
`;

export const MatchButton = styled.button`
  border-radius: 8px;
  color: blue;
  height: 60%;
  margin-right: 10px;
  background-color: white;
  border: 1px solid #f5f6f6;
  :hover {
    background-color:bisque;
  }
  padding: 4px 8px;
  font-size: 8px;
  outline-style: none;
`;

export const MatchProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
  width: 45vh;
  height: 85vh;
  flex-direction: column;
  box-shadow: grey 1px 1px 5px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;
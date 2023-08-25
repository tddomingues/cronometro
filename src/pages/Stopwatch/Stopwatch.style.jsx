import { styled } from "styled-components";

export const Container = styled.section`
  background-color: #413d3d;
  display: flex;
  align-items: center;
  
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
  min-height: 100vh;
`;

export const Box = styled.div`
  font-family: "Orbitron", sans-serif;
  color: #413d3d;
  font-size: 90px;
  font-weight: bold;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
`;

export const BoxScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  & button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  & button span {
    font-size: 100px;
  }

  & button:nth-child(1) {
    color: #67be9b;
    grid-column: 1 / 2;
  }

  & button:nth-child(2) {
    color: #F4F4F2;
    grid-column: 2 / 3;
  }

  & button:nth-child(3) {
    color: #2196F3;
    grid-column: 3 / 4;
  }
`;

export const Progress = styled.div`
  position: relative;
  background: conic-gradient(#040004 3.6deg, #f4f4f4 0);
  height: 250px;
  width: 250px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  & div::before {
    content: "";
    background-color: #413d3d;
    height: 210px;
    width: 210px;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & span {
    position: relative;

    color: #040004;
  }

  & div > p {
    position: absolute;
    color: #f4f4f4;
    font-size: 12px;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BoxRecord = styled.div`
padding-bottom: 20px;
    & div {
      width: 600px;
      height: 300px;
      background-color: #040004;
      padding: 10px;
    }

    & div > p {
      color: #f4f4f4;
      font-size: 25px;
    }
`

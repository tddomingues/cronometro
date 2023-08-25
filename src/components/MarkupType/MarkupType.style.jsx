import { styled } from "styled-components";

export const Container = styled.section`
  background-color: #040004;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const Box = styled.div`
  font-family: "Orbitron", sans-serif;
  color: #413d3d;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;

  
`;



export const BoxTime = styled.div`

position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  

  & span {


    color: #d119d1;
  }

  & div > p {
    position: absolute;
    color: #f4f4f4;
    font-size: 8px;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

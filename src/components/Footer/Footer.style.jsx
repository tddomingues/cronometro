import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #121210;
  height: 100px;
  color: #f4f4f4;
  padding: 10px 1em 10px 1em;

  & span {
    color: #f4f4f4;
    font-weight: bold;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

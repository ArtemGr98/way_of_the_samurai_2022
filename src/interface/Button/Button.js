import styled from "styled-components";

export const Button = styled.button`
  background: deepskyblue;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  border: none;
  :disabled {
    opacity: 0.4;
  }
`
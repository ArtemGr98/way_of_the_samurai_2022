import styled from "styled-components";

export const HeaderStyle = styled.header`
  text-align: start;
  background-color: deepskyblue;
`

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  animation: App-logo-spin infinite 20s linear;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

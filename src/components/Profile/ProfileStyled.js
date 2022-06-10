import styled from "styled-components";

export const ProfileImg= styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const ProfileInfo = styled.div`
  margin-top: 20px;
  display: flex;
  max-height: 300px;
  
  .ava {
    width: 20%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .description {
    width: 80%;
    padding-left: 20px
  }
`
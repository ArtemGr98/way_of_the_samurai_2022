import styled from "styled-components";

export const PostStyled = styled.div`
  display: flex;
  
  .img {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .wrapper {
    padding-left: 10px;
  }

  .text {
    margin-bottom: 10px;
  }
  
  .btn {
    button {
      margin-right: 10px;
    }
  }
`
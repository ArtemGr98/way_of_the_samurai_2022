import styled from "styled-components";

export const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  textarea {
    resize: none;
    border-radius: 8px;
    padding: 10px;
    height: 50px;
  }
  button {
    width: 100px;
    height: 50px;
  }
`
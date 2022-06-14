import styled from "styled-components";
import {Button} from "../Button/Button";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const PostsButton= styled(Button)`
  width: 100px;
  height: 50px;
  margin-top: 15px;
`
export const Textarea = styled.textarea`
  resize: none;
  border-radius: 8px;
  padding: 10px;
  height: 50px;
  width: 200px;
`

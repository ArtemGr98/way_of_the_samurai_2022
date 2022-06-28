import styled from "styled-components";

export const Textarea = styled.textarea`
  resize: none;
  border-radius: 8px;
  padding: 10px;
  height: 50px;
  width: 200px;
`

export const Input = styled.input`
  border-radius: 6px;
  padding: 5px 10px;
  width: 200px;
  border: 1px solid gray;
`

export const validationError = styled.div`
  font-weight: bold;
  color: red;
`

const ElementForm = Element => ({field, form: { touched, errors }, ...props}) => {
    return <Element {...field} {...props} />
}

export const InputForm = ElementForm(Input)
export const TextareaForm = ElementForm(Textarea)


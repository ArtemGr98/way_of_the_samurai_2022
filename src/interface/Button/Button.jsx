import styled from "styled-components";

const BtnStyle = styled.button`
  background: deepskyblue;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  border: none;
`

const Button = (props) => {
    return (
        <BtnStyle>
            {props.name}
        </BtnStyle>
    )
}

export default Button
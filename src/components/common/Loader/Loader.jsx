import loader from '../../../img/loader2.gif'
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  left: 50%;
  top: 50%;
  img {
    width: 100px;
    height: 100px;
  }
`

const Loader = (props) => {
    return (
        <LoaderWrapper>
            <img src={loader} alt="loader"/>
        </LoaderWrapper>
    )
}

export default Loader
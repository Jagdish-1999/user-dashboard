import styled from "styled-components";

const Container = styled.label`
  display: block;
  position: relative;
  /* padding-left: 35px; */
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  border-radius: 18px;
  /* transition: all 0.3s; */

  &:hover ~ span {
    transition: all 0.2s;
    border: 1px solid #2196f3;
  }

  &:checked ~ span {
    transition: all 0.2s;
    background-color: #2196f3;
    border: 1px solid #2196f3;
  }

  &:checked ~ span:after {
    display: block;
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.colors.checkbox_unchecked_bg};
  transition: all 0.2s;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    transition: all 0.2s;
    border: 1px solid none;
  }
`;

export { Container, StyledInput, CheckMark };

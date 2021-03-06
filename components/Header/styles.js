import styled, { css } from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px auto 20px;
  min-height: 50px;
`;

const ColorModeButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 2em;
  line-height: 0;
  padding: 8px;
  cursor: pointer;
  background-color: var(--dark-mode-button-bg);
  border: none;
  border-radius: 50%;
  transition: all 0.6s ease-out;
  ${(props) =>
    !props.isDarkMode &&
    css`
      box-shadow: 0px 0px 8px 4px gray;
    `}

  &:focus {
    outline: none;
  }
`;

export { Container, ColorModeButton };

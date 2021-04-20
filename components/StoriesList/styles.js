import styled from "styled-components";

const StoryGrid = styled.ul`
  list-style: none;
  margin: 20px;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-content: center;

  > a {
    text-decoration: none;
  }
`;

const Story = styled.li`
  background-color: #6c534e;
  height: 310px;
  text-align: center;
  padding-top: 30%;
  padding-left: 12px;
  position: relative;
  box-shadow: 2px 2px 1px 1px #828080;
  transition: transform 0.1s ease-out;

  &:hover {
    transform: scale(1.03, 1.03);
  }

  &::before {
    content: "";
    height: 99%;
    box-shadow: 10px 0px 2px 0px black;
    position: absolute;
    left: 0;
    top: 2px;
    width: 1px;
  }

  > span {
    color: #ffc107;
    font-size: 2em;
    text-shadow: 0px 0.5px 0 #ffeb3b;
  }
`;

const Title = styled.h1`
  margin: 0;
`;

export { StoryGrid, Story, Title };

import styled from "styled-components";

const StoryGrid = styled.ul`
  list-style: none;
  margin: 20px;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-content: center;
`;

const Story = styled.li`
  background-color: palevioletred;
  height: 310px;
  text-align: center;
  padding-top: 30%;
  padding-left: 12px;
  position: relative;
  box-shadow: 1px 1px 1px 1px #828080;

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
    color: #491d27;
    font-size: 2em;
    text-shadow: 0px 0.5px 0 rgba(255, 255, 255, 0.5);
  }
`;

export { StoryGrid, Story };

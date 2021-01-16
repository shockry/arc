import styled from "styled-components";

const StoryGrid = styled.ul`
  list-style: none;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, 220px);
`;

const Story = styled.li`
  background-color: palevioletred;
  height: 350px;
  color: white;
`;

export { StoryGrid, Story };

import styled from "styled-components";

const StoryContainer = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 3em;
`;

const Body = styled.article`
  max-width: 90ch;
  margin-top: 2em;
  font-size: 1.3em;

  > blockquote {
    font-style: italic;
    color: #6f6f6f;
  }

  > hr {
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(
      to right,
      var(--hr-gradient-edge),
      var(--hr-gradient-middle),
      var(--hr-gradient-edge)
    );
    margin: 2em auto;
  }
`;

const BackButton = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-size: 1.7em;
`;

const TheEnd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export { StoryContainer, Title, Body, BackButton, TheEnd };

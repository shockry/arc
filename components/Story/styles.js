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
    overflow: visible; /* For IE */
    height: 30px;
    border-style: solid;
    border-color: black;
    border-width: 1px 0 0 0;
    border-radius: 20px;
    margin: 2em auto 1em auto;

    &:before {
      display: block;
      content: "";
      height: 30px;
      margin-top: -31px;
      border-style: solid;
      border-color: black;
      border-width: 0 0 1px 0;
      border-radius: 20px;
    }
  }
`;

const BackButton = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-size: 1.7em;
  margin-left: 20px;
  margin-top: 10px;
`;

export { StoryContainer, Title, Body, BackButton };

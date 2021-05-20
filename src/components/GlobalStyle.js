import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  @media (max-width: 1700px) {
    font-size: 75%;
  }
}

body {
  background: #1b1b1b;
  font-family: "Inter", sans-serif;
}

button {
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #23d997;
    color: #fff;
  }
}

h2 {
  font-weight: lighter;
  font-size: 4rem;
}

h3 {
  color: #fff;
}

h4 {
  font-size: 2rem;
  font-weight: 700;
}

a {
  font-size: 1.1rem;
}

span {
  font-weight: 700;
  color: #23d997;
}

p {
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}
`;

export default GlobalStyle;

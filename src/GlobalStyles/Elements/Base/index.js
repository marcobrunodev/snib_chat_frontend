import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
:root {
  font-size: 10px;
}

html, body, #root {
  height: 100%;
}

body {
  font-family: 'Press Start 2P', sans-serif;
  
}

button {
  border: none;
}
`

export default Base
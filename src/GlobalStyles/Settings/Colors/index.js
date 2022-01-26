import { createGlobalStyle } from 'styled-components'

const Colors = createGlobalStyle`
:root {
  --color-white: #ffffff;
  --color-disabled: #d3d3d3;
  
  --color-black: #212529;

  --color-primary: #209cee;
  --color-success: #92cc41;
  --color-warning: #f7d51d;
  --color-error: #e76e55;

  --color-twitch: #9146ff;
}
`

export default Colors
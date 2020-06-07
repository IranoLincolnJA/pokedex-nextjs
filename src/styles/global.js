import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EFEFBB;
    background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230));
    color: white;
    margin: 0;
    font-family: rubik;
  }

`
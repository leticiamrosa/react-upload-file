import { createGlobalStyle } from 'styled-components';

// forcing the screen to be a 'fullscreen'
export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: #7159c1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antiliased;
    }

    html, body, #root {
        height: 100%;
    }
`;
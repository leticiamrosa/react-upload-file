import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// this is good for use in mobile aplication, because if the screen are <400 
// (mobile maybe) will fill just it
export const Content = styled.div `
    width: 100%;
    max-width: 400px;
    margin: 30px;
    background: #fff;
    border-radius: 4px;
    padding: 1em;
`;
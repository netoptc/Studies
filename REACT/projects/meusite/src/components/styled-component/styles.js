import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    background-color:#CCC;
`;


export const Titulo = styled.h2`
    color: ${props => `${props.cor}`};
    font-size: ${props => `${props.tamanho}`};
`;
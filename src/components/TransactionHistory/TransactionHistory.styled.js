import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 500px;
`

export const Head = styled.thead`

`
export const Title = styled.th`
width: calc(100% / 3);
padding: 10px;

font-weight: 600;
font-size: 20px;
text-transform: uppercase;

background-color: lightcoral;
color: #ffffff;
`

export const Data = styled.td`
    width: calc(100% / 3);
    text-align: center;
    padding: 10px;

    font-size: 18px;
    letter-spacing: 1.3;
    color: #757575;

    border: 1px solid #757575;
`
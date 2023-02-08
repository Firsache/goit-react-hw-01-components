import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 500px;
`

export const Head = styled.thead`
    background-color: lightcoral;
    color: #ffffff;
    
`
export const Title = styled.th`
width: calc(100% / 3);
padding: 10px;

font-weight: 600;
font-size: 20px;
text-transform: uppercase;

border-right: 1px solid #ffffff;

&:last-of-type{
    border-right: none;
}
`
export const Body = styled.tbody`
    &:nth-child(odd) {
        background-color: rgb(240 128 128 / 40%);
    }
`

export const Row = styled.tr`
    transition: box-shadow 250ms ease, transform 250ms ease-in-out;

    &:hover{
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.12);
        transform: translateY(-2px);
    }
`
export const Data = styled.td`
    width: calc(100% / 3);
    text-align: center;
    padding: 10px;

    font-size: 18px;
    letter-spacing: 1.3;
    color: #757575;

    border: 1px solid #757575;
    
    &:first-of-type{
        text-align: start;
        padding-left: 40px;
        text-transform: capitalize;
    }
`
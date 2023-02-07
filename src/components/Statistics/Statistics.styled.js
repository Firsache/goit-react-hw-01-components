import styled from 'styled-components';

export const StatisticsSection = styled.section`
margin-bottom: 30px;
max-width: 500px;
display: flex;
flex-direction: column;
background-color: #ffffff;
`

export const Title = styled.h2`
padding-top: 30px;
padding-bottom: 30px;
text-align: center;
text-transform: uppercase;
color: #757575;
font-weight: 600;
font-size: 26px;
letter-spacing: 1.3;
`
export const StatsList = styled.ul`
    display: flex;
`
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
width: calc(100% / 5);
padding-top: 15px;
padding-bottom: 15px;

font-size: 20px;
color: #ffffff;
background-color: blue;
`
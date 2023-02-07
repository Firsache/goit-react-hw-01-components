import styled from 'styled-components';

export const Card = styled.div`
    padding-top: 20px;
    margin-bottom: 20px;
    max-width: 350px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 6px;

    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    
    color: #757575;
    font-size: 18px;
    transition: box-shadow 250ms ease, transform 250ms ease-in-out;

    &:hover{
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.3);
        transform: translateY(-3px);
    }
`
export const Description = styled.div`
    padding-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`
export const Avatar = styled.img`
    border-radius: 50%;
`
export const TextAccent = styled.p`
    padding-bottom: 3px;
    
    font-weight: 700;
    font-size: 24px;
    color: #2f303a;
    
`
export const StatsInfo = styled.ul`
    display: flex;

    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(47, 48, 58, 0.8);

    font-size: 18px;
`
export const StatsItem = styled.li`
    width: calc(100% / 3);
    padding-top: 15px;
    padding-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    border: 1px solid #2f303a;
    transition: color 250ms ease;

    &:hover {
        color: #ffffff;
    }
`
/* .CardSuperProfile{
    composes: cardProfile;
    background-color: #fff;
}

title?css.cardProfile:css.CardSuperProfile */
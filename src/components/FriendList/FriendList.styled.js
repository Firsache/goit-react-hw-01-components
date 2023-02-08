import styled from 'styled-components';

export const FriendsList = styled.ul`
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

export const FriendsItem = styled.li`
display: flex;
padding: 15px 30px 15px;
border: 1px solid rgba(255, 255, 255, 0.6);
transition: box-shadow 250ms ease-in, transform 250ms ease-in;

&:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}
`

export const OnlineIndicator = styled.span`
width: 20px;
height: 20px;
align-self: center;
border-radius: 50%;
margin-right: 20px;

background-color: ${({current}) => current ? "lightgreen" : "lightcoral"};
`
export const FriendAvatar = styled.img`
margin-right: 30px;
padding: 4px 10px;
border: 1px solid rgba(47, 48, 58, 0.8);
border-radius: 4px;
`
export const FriendName = styled.p`
align-self: center;
font-size: 20px;
`

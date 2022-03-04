import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    
`;

export const FAB = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: aquamarine;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    align-self: center;
`;



export const ContainerItem = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerActions = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 5px;
`;



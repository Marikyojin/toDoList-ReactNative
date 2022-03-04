import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, Alert} from 'react-native';
import Editar from '../components/modals';
import Icon from 'react-native-vector-icons/FontAwesome';



import {
    Container,
    FAB,
    ContainerItem,
    ContainerActions
} from './styles';

import CheckBox from '@react-native-community/checkbox';


const DATA=[
    {
        id:0,
        title:"Fazer toDoList"
    },
    {
        id:1,
        title:"Estudar Flutter"
    },
    {
        id:2,
        title:"Fazer ficha com o Danilo"
    }
];




function Item({ item, modalVisible, setModalVisible, texto, setTexto }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    return (
        <ContainerItem onPress={() => {
            [setModalVisible(true),
            setTexto(item.title),
            ]
        }
        }>
            <Text>{item.title}</Text>
            <ContainerActions>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Icon name="trash" size={19} color='red' onPress={() => {
                        Alert.alert(
                            "Excluir"
                        )
                    }}>
                </Icon>
            </ContainerActions>
            <Editar
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title={texto}
                setTitle={setTexto}
            ></Editar>


        </ContainerItem>
    );
}



    


    




const Home = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [texto, setTexto] = useState();




    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                texto={texto}
                setTexto={setTexto}
            ></Item>
        )
    }

    return (
        <SafeAreaView>
            <Container>

                
                
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                >

                </FlatList>



                <FAB
                    onPress={() => {
                        return(
                            Alert.alert("Adicionar")
                        )
                    }}
                >
                    <Icon name="plus" size={25} color="#ffff" />
                </FAB>

            </Container>

        </SafeAreaView>
    )


}

export default Home;
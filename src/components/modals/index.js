import React from "react";
import { Alert, Modal, Text } from "react-native";




import {
    ContainerContent,
    ContainerButton,
    TextInputChange,
    Button
} from "./styles";






const Editar = ({ modalVisible, setModalVisible, title, setTitle  }) => {


    return (

        <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
        >
            <ContainerContent>
                <TextInputChange
                    style={{ textAlignVertical: 'top' }}
                    onChangeText={setTitle}
                    value={title}
                    multiline={true}
                    numberOfLines={4}
                    maxLength={40}
                ></TextInputChange>
                <ContainerButton>
                    <Button
                        onPress={() => { 
                            setModalVisible(!modalVisible) 
                        }}
                    >
                        <Text>Cancelar</Text>
                    </Button>
                    <Button
                        onPress={() => { [
                            setModalVisible(!modalVisible) ,
                            
                            Alert.alert (
                                "Salvar"
                            )
                            
                        ]
                        }}
                    >
                       <Text>Salvar</Text>
                    </Button>
                </ContainerButton>
            </ContainerContent>
        </Modal>


    )
}



export default Editar;
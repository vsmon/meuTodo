import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Sitema from './Sistema';
import Sistema from './Sistema';

export default class CreateLogin extends Component {

    static navigationOptions = {
        title:'Criar Login'
    }

    constructor(props){
        super(props);
        this.state = {
            textUsuario:'',
            textSenha:'',
        }
        Sistema.LogOut();
    }
    
    createLogin(){
        Sistema.CreateLogin(this.state.textUsuario,this.state.textSenha)
        .then(()=>{
            alert('Usuario criado com sucesso!')            
            this.props.navigation.navigate('Login')            
        })
        .catch((error)=>{            
            alert(error.code)
        })
    }
    render() {
        return(
            <View style={styles.containerLogin}>
                <Text>Usuário:</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Digite o usuário...'
                    onChangeText={(txtUsuario)=>this.setState({textUsuario:txtUsuario})}
                />
                <Text>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a senha...'
                    onChangeText={(txtSenha)=>this.setState({textSenha:txtSenha})}
                />
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>this.createLogin()}
                >
                    <Text style={styles.txtCreate}>Create</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerLogin:{
        margin:10

    },
    input:{
        borderWidth:1
    },
    txtCreate:{
        fontSize:16,
        color:'blue'
    },
    touchable:{
        alignItems:'center'
    }
})
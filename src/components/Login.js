import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Sistema from './Sistema';

export default class Login extends Component {

    static navigationOptions = {
        title:'Login',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {
            textUsuario:'rodrigo@gmail.com',
            textSenha:'123456',
        }
        Sistema.LogOut();
        this.logar = this.logar.bind(this);
    }
    logar(){
        /* Sistema.Listner((user)=>{
            if(user){
                this.props.navigation.navigate('Home')
            }
        }) */
        Sistema.Login(this.state.textUsuario,this.state.textSenha)
        .then((user)=>{
            this.props.navigation.navigate('Home', {user})
        })
        .catch((error)=>alert(error.code))
        
    }
    render() {
        return(
            <View style={styles.containerLogin}>
                <Text style={styles.txtTitulo}>Login</Text>
                <Text>Usuário:{this.state.textUsuario}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='Digite o usuário...'
                    onChangeText={(txtUsuario)=>this.setState({textUsuario:txtUsuario})}
                    //value='rodrigo@gmail.com'
                />
                <Text>Senha:{this.state.textSenha}</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite a senha...'
                    onChangeText={(txtSenha)=>this.setState({textSenha:txtSenha})}
                    //value='123456'
                />
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>this.logar()}
                >
                    <Text style={styles.txtLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={()=>this.props.navigation.navigate('CreateLogin')}
                >
                    <Text style={styles.txtLogin}>Create Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerLogin:{
        margin:10,
        justifyContent:'center'
    },
    input:{
        borderWidth:1
    },
    txtLogin:{
        fontSize:16,
        color:'blue',
        marginBottom:10
    },
    touchable:{
        alignItems:'center'
    },
    txtTitulo:{
        fontSize:36,
        marginBottom:100,
        marginTop:50,
        color:'black',
    }
})
import React, {Component} from 'react';
import {View, TextInput, Text, Button} from 'react-native';
import Sistema from './Sistema';

export default class EditItem extends Component{

    static navigationOptions = {
        title:'Edit'
    }

    constructor(props){
        super(props);
        this.state = {
            textEdit:this.props.navigation.state.params.nome,
            key:this.props.navigation.state.params.key,
        }
    }
    editText(){
        Sistema.updateItem(this.state.key,this.state.textEdit)
        .then(()=>{
            alert('Atualizado com sucesso!!!')
            this.props.navigation.goBack()
        })
        .catch((error)=>{
            alert(error.code)
        })
    } 

    render(){
        return(
            <View>
                <TextInput
                    placeholder='Edit...'
                    onChangeText={(textEdit)=>{
                        this.setState({textEdit})
                    }}
                    value={this.state.textEdit}
                />
                <Button
                    title='Save'
                    onPress={()=>this.editText()}

                />
            </View>
        )
    }
}
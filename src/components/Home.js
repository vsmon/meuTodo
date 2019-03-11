import React, {Component} from 'react';
import {Text, View, Button, TextInput, FlatList,StyleSheet, TouchableOpacity} from 'react-native';
import Sistema from './Sistema';
import ItemLista from './ItemTarefa';


export default class Home extends Component{

    static navigationOptions = {
        title:'Home',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {
            userID:this.props.navigation.state.params.user.uid,
            txtTarefa:'',
            listTarefas:[],
        }
        this.listTarefas = this.listTarefas.bind(this);
        //this.listTarefas();
    }
    componentWillUnmount(){
        Sistema
    }
    componentDidMount(){
        this.listTarefas();
    }
    addTarefa(tarefa){
        Sistema.addItem(tarefa)
    }
    delTarefa(key){
        Sistema.delItem(key)
        .catch((error)=>{
            alert(error.code)
        })
    }
    updateTarefa(item){
        this.props.navigation.navigate('EditItem',{key:item.key,nome:item.nome})
    }
    listTarefas(){
        Sistema.listItem((snapshot)=>{
            let state = this.state
            state.listTarefas = []
            snapshot.forEach((itemChild)=>{  
                state.listTarefas.push({
                    key:itemChild.key,
                    nome:itemChild.val().nome,
                    done:itemChild.val().done,
                })
            })
            this.setState(state)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <Text>ID:{this.state.userID}</Text>
                <TextInput
                    placeholder='Adicionar tarefa...'
                    onChangeText={(txtTarefa)=>{
                        this.setState({txtTarefa})
                    }}
                />
                <Button
                    title='Adicionar'
                    onPress={()=>this.addTarefa(this.state.txtTarefa)}
                />
                <Button
                    title='LogOut'
                    onPress={()=>{
                        Sistema.LogOut()
                        this.props.navigation.goBack();
                    }}
                />
                <FlatList
                    data={this.state.listTarefas}
                    renderItem={({item})=>{
                        return(
                            <ItemLista 
                                data={item} 
                                onPressDelete={()=>this.delTarefa(item.key)}
                                onPressEdit={()=>this.updateTarefa(item)}
                                //onPressMark={()=>this.markTarefa(item)}
                            />
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#efefef'
    }
})
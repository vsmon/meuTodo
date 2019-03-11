import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Sistema from './Sistema';

export default class ItemLista extends Component{
    constructor(props){
        super(props);
        this.state = {
            img:(this.props.data.done == 0)?require(`../../assets/images/unchecked.png`):require(`../../assets/images/checked.png`),
            done:this.props.data.done
        }
        this.markTarefa = this.markTarefa.bind(this)
    }
    markTarefa(){
        if(this.state.done == 0){
            this.setState({img:require(`../../assets/images/checked.png`)})
            this.setState({done:1})
            Sistema.markTarefa(this.props.data.key,1)
        }else{
            this.setState({img:require(`../../assets/images/unchecked.png`)})
            this.setState({done:0})
            Sistema.markTarefa(this.props.data.key,0)
        }
    }
    render(){
        return(
            <View style={styles.itemFlatList}>
                {/* <View sytle={styles.containerPrinc}> */}            
                    <View style={styles.containerItens}>
                        <TouchableOpacity
                            onPress={()=>this.markTarefa()}
                        >
                            <Image source={this.state.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={
                                this.props.onPressEdit
                            }
                        >
                            <Image source={require(`../../assets/images/edit.png`)}/>
                        </TouchableOpacity>
                        <Text style={styles.textItemList}>{this.props.data.nome}</Text>

                        <TouchableOpacity
                            onPress={this.props.onPressDelete}
                        >
                            <Image source={require(`../../assets/images/delete.png`)}/>
                        </TouchableOpacity>   
                    </View>                    
                </View>                                
            /* </View> */
        )
    }
}
const styles = StyleSheet.create({
    itemFlatList:{
        backgroundColor:'#efefef',
        padding:5,
        flexDirection:'row',
        flex:1
    },
    textItemList:{
        margin:10,
        fontSize:18,
        fontWeight:'bold',
        flex:1
    },
    containerItens:{
        backgroundColor:'white',
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        borderRadius:5
    },
    containerPrinc:{
        margin:10
    }
})

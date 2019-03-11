import firebase from './FirebaseConnection';

export default new class Sistema{

    Login(email,password){
        return firebase.auth().signInWithEmailAndPassword(email,password);
    }
/*     Listner(callback){
        firebase.auth().onAuthStateChanged(callback)
    } */
    LogOut(){
        firebase.auth().signOut()

    }
    CreateLogin(email,password){
        return firebase.auth().createUserWithEmailAndPassword(email,password)
    }
    addItem(tarefa){
        const key = firebase.database().ref(firebase.auth().currentUser.uid).child('tarefas').push().key
        firebase.database().ref(firebase.auth().currentUser.uid).child('tarefas').child(key).set({
            nome:tarefa,
            done:0,
        })
    }
    delItem(key){
        return firebase.database().ref(firebase.auth().currentUser.uid).child('tarefas').child(key).remove()
    }
    updateItem(key,value){
        return firebase.database().ref(firebase.auth().currentUser.uid).child('tarefas').child(key).update({nome:value})
    }
    listItem(callback){
        return firebase.database().ref(firebase.auth().currentUser.uid).child('tarefas').on('value',callback)
    }
    markTarefa(key,value){
        return firebase.database().ref(firebase.auth().currentUser.uid).child('tarefas').child(key).update({done:value})
    }
    off(){
        firebase.database().goOffline();
    }
}
import { StatusBar } from "expo-status-bar";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Assignment() {

    const [email, setemail] = useState("sadiasaleem5090@gmail.com");
    const [password, setpassword] = useState("S@dias@leem");
    return (
       /* <View style={styles.image}>
            <Image style={{width:400, height:300 }} source={require('..\assets\download.png')} image/>
        </View>*/
        <View style={styles.container}>
            <Text style={styles.txt}>Log in to Snapchat</Text>
            <Text>Username or Email</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text>Password</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text> Forgot Password</Text>
            <Text style={styles.btn}>log In</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop:'50%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'black',
    },
    input: {
        width: "50%",
        backgroundColor: "#e6e8e6",
        margin:'5%',
    },
    btn: {
        fontSize: 15,
        color: 'black',
        backgroundColor: 'yellow',
        borderRadius:100,
        width: '20%',
        textAlign: 'center',
        padding: 6,
        
        marginTop:'10%',
    }
});

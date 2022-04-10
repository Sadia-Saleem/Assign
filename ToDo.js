import { StatusBar } from "expo-status-bar";
import React from "react";
import {SafeAreaView, StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";
export default function ToDo() {
    const [items, setyouritems] = useState("");
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>My TODO App </Text>
            <TextInput style={styles.input} placeholder="Add Your item....."></TextInput>
            <Text style={styles.btn}>New TODO</Text>
            <Text style={styles.txt}> Item count: 0 Unchecked count: 0</Text>
            <Text style={styles.btn}>Remove TODO</Text>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      
        flex: 1,
        justifyContent: "left",
        alignItems: "left",
    },
    txt: {
        fontSize: 15,
        color:'black',
    },
    input: {
        width: "50%",
        backgroundColor: "#e6e8e6",
        margin:'5%',
    },
    btn: {
        fontSize: 11,
        color: 'white',
        backgroundColor: "black",
        width: '20%',
        textAlign: 'center',
        padding: 6,
        marginTop:'10%',
    }
});

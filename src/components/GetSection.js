import React from 'react'
import styled from 'styled-components'
import {  
    StyleSheet, 
    View,
    Image,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground,
    } 
from 'react-native';



export default function GetSection ({ section, currentStadium }) {
   let sectionImage = section.image
        if(section.stadium_id === currentStadium.id) {
            console.log(sectionImage)
    return (
        <View >
                <Image source={{uri: sectionImage}} style={{ width: 300, borderWidth: 2, borderColor: "#20232a",height: 150, position: 'relative', top: 7, right: -37,  padding: 2, shadowOffset: {width: 0, height: 3}, shadowRadius: 5, shadowOpacity: 1.0}}></Image>
                <View>
                    <Text style={styles.foodHeader}>Food</Text>
                </View>
                <View>
                    <Text style={styles.drinkHeader}>Drink</Text>
                </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    
    sectionImage: {
        flex: 1
    },
    foodHeader: {
        position: "relative",
        top: 20,
        right: -10, 
        fontFamily: "GillSans-Bold",
        fontSize: 30,
        color: "blue",
        
    },
    drinkHeader:{
        position: "relative",
        top: 100, 
        right: -10,
        fontFamily: "GillSans-Bold",
        fontSize: 30,
        color: "blue"
    }
})
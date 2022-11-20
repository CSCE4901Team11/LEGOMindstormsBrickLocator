import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { Text, View, TouchableHighlight, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './Pieces.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from '../constants/context';
import Themes from '../constants/ThemeColors';

export default function GetPieces() {
    const [pieces, setPieces] = useState([])
    const [loading, setLoading] = useState(true)

    const apiCall = async () => {
       const resp =  await fetch("https://rebrickable.com/api/v3/lego/sets/45678-1/parts/?page_size=115&inc_color_details=0", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": "apikey", // change value to actual api key
                "Rebrickableapi-host": "https://rebrickable.com"
            }
        })
        const data = await resp.json()
        delete data.count
        delete data.next
        delete data.previous
        setPieces(data)
        setLoading(false)
    }

    const listSeparator = () => {
        return <View style={styles.listSeparator} />;
    }

    const navigation = useNavigation();
    const SelectPiece = async (name) => {
        try {
            await AsyncStorage.setItem('@current_piece', name)
            navigation.navigate('Scanner')
            console.log("piece saved")
        }
        catch (error) {
            console.log('piece not saved')
        }
    }
    
    const currentTheme = useContext (ThemeContext)
    const theme = currentTheme.state.theme
    const colors = Themes[theme]

    const renderItem = ({ item }) => {
        
        return (
            <View style={[styles.itemContainer, {backgroundColor: colors.backgroundColor} ]}>
                <Image style = {styles.image} source={{uri: item.part.part_img_url}} />
                <View style={styles.itemInfoContainer}>
                    <Text style = {[styles.itemTitle, {color: colors.textColor}]}>{item.part.name}</Text>
                    <Text style = {[styles.text, {color: colors.textColor}]}>Element ID/Design ID: {item.element_id}/{item.part.part_num}</Text>
                    <Text style = {[styles.text, {color: colors.textColor}]}>Color: {item.color.name} </Text>
                </View>
                <TouchableOpacity onPress={() => SelectPiece(item.part.name) }>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Select Piece</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={apiCall}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>View Pieces</Text>
                </View>
            </TouchableHighlight>
            <FlatList style={styles.list}
                data={pieces.results}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={listSeparator}
            />
            {/* {console.log(pieces.results)} */}
        </View>
    );
    }


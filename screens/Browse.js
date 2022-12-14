import React, { useState, useContext } from 'react';
import { Text, View, TouchableHighlight, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import SearchBar from 'react-native-dynamic-search-bar';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';
import Themes from '../constants/ThemeColors';
import pieces from '../constants/MasterPartList.json';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext)
    const theme = currentTheme.state.theme
    const colors = Themes[theme]
    //const [filterText, setFilterText] = useState()
    const [filteredData, setFilteredData] = useState(() => (pieces.Parts))

    const setData = () => {
        setFilteredData(pieces.Parts)
    }
    
    const filterData = (text) => {
        const regex = new RegExp(text, "i")
        var data = (pieces.Parts).filter((item) => {
            //return regex.test(item.Official_Name)
            //console.log(regex.test(item.Official_Name))
            if(!(regex.test(item.Official_Name))){
                //console.log("official item check false")
                if(!(regex.test(item.Color))){
                    //console.log("color check false")
                    if(!(regex.test(item.Sheet_Element_ID))){
                        if(!(regex.test(item.Main_Part_ID))){
                            return false
                        }else{
                            return regex.test(item.Main_Part_ID)
                        }
                    }else{
                        return regex.test(item.Sheet_Element_ID)
                    }
                }else{
                    return regex.test(item.Color)
                }
            }else{
                return regex.test(item.Official_Name)
            }
        })
        //console.log(data)
        setFilteredData(data)
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

    const renderItem = ({ item }) => {
        
        return (
            <View style={[styles.itemContainer, {backgroundColor: colors.backgroundColor} ]}>
                <Image style = {styles.image} source={{uri: item.Image}} />
                <View style={styles.itemInfoContainer}>
                    <Text style = {[styles.itemTitle, {color: colors.textColor}]}>{item.Official_Name}</Text>
                    <Text style = {[styles.text, {color: colors.textColor}]}>Element ID/Design ID: {item.Sheet_Element_ID}/{item.Main_Part_ID}</Text>
                    <Text style = {[styles.text, {color: colors.textColor}]}>Color: {item.Color} </Text>
                </View>
                <TouchableOpacity onPress={() => SelectPiece(item.Official_Name) }>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Select Piece</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[styles.container, {backgroundColor: colors.background}] }>
         <SearchBar
            placeholder="Search here"
            onClearPress={() => setData()}
            onChangeText={(text) => {filterData(text), console.log(text)}} 
         />
         <FlatList style={styles.list}
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.ID}
                ItemSeparatorComponent={listSeparator}
            />
        </View>
    );
}

export default BrowseScreen;
import React, { useState, useContext } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
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
    const [filteredData, setFilteredData] = useState(() => (pieces.Parts))

    const setData = () => {
        setFilteredData(pieces.Parts)
    }
    
    const filterData = (text) => {
        var data = (pieces.Parts).filter((item) => {
            if (item.Official_Name.includes(text)){
                return item
            }
            else if (item.Sheet_Element_ID.includes(text)){
                return item
            }
            else if (item.Updated_Element_ID){
                if (item.Updated_Element_ID.includes(text)){
                    return item
                }
            }
            else if (item.Main_Part_ID.includes(text)){
                return item
            }
            else if (item.Color.includes(text)){
                return item
            }
            else{
                return false
            }
        })
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
                <Text style = {[styles.itemTitle, {color: colors.textColor}]}>{item.Official_Name}</Text>

                <View style={styles.imageAndInfo}>  
                    <Image accessible={true} accessibilityLabel= {`image of ${item.Official_Name}`} accessibilityRole = "image" style = {styles.image} source={{uri: item.Image}} />
                    <View style={styles.itemInfoContainer} >
                        <Text style = {[styles.text, {color: colors.textColor}]}>Element ID: {item.Sheet_Element_ID}</Text>
                        <Text style = {[styles.text, {color: colors.textColor}]}>Design ID: {item.Main_Part_ID}</Text>
                        <Text style = {[styles.text, {color: colors.textColor}]}>Color: {item.Color} </Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity accessible = {true} accessibilityLabel="Select piece" accessibilityRole= "button" onPress={() => SelectPiece(item.Official_Name) }>
                        <View style={[styles.button, {backgroundColor: colors.buttonColor}]}>
                            <Text style={{color: colors.buttonTextColor}}>Select Piece</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, {backgroundColor: colors.background}] }>
            <View style={styles.listContainer}>
                <SearchBar
                    accessibilityLabel="Search Bar"
                    accessible={true}
                    accessibilityRole = "search"
                    placeholder="Search here"
                    onClearPress={() => setData()}
                    onChangeText={(text) => {filterData(text), console.log(text)}} 
                />
                <FlatList style={styles.list}
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.ID}
                    itemSeparatorComponent={listSeparator}
                />
            </View>
        </View>
    );
}

export default BrowseScreen;

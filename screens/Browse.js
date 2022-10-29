import React, { useContext } from 'react';
import { View, Text, Pressable, TouchableOpacity , TextInput, Button } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
           
           <Text style = {theme == 'light' ? styles.title_light : theme == 'dark' ? styles.title_dark : styles.title_blue }>
            Browse Screen
           </Text>

           <Text style = { theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }>
            Search Bar
           </Text>
            
            <View style={ theme == 'light' ? styles.sub_container_light : theme == 'dark' ? styles.sub_container_light : styles.sub_container_light }>
            <TouchableOpacity 
              style= {styles.button_light}>
              <Text style = { theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }> 
                  Browse Pieces 
              </Text>
            </TouchableOpacity>
                  
            <TouchableOpacity 
              style= {styles.button_light}>
              <Text style = { theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }> 
                  Browse Models 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style= {styles.button_light}>
              <Text style = { theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }> 
                  Browse Guides 
              </Text>

            </TouchableOpacity>
        </View>

        </View>
    );
    
}

export default BrowseScreen;

import React, { useContext } from 'react';
import { View, Text, Pressable, TouchableOpacity , TextInput, Button } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Browse.styles';

function BrowseScreen () {

    const currentTheme = useContext (ThemeContext);
    const theme = currentTheme.state.theme;

    return (
        <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
           <Text style = {theme == 'light' ? styles.text_light : theme == 'dark' ? styles.text_dark : styles.text_blue }>
            Browse !!!!
           </Text>

            <Button 
              style= {styles.button_light}
              title="Browse Pieces"
            />
            
            <View style={ theme == 'light' ? styles.sub_container_light : theme == 'dark' ? styles.sub_container_light : styles.sub_container_light }>
            <TouchableOpacity 
              style= {styles.button_light}>
              <Text> 
                  Browse Pieces 
              </Text>
            </TouchableOpacity>
                  
            <TouchableOpacity 
              style= {styles.button_light}>
              <Text> 
                  Browse Models 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style= {styles.button_light}>
              <Text> 
                  Browse Guides 
              </Text>
            </TouchableOpacity>
        </View>

        </View>
    );
    
}

export default BrowseScreen;

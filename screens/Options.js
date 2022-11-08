import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { View, Text, Button, } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Options.styles';
import OptionsNav from '../constants/optionsnavigation';

function OptionsScreen() {

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;

  const blueThemeChange = ()  => {
          currentTheme.dispatch({ type: "BLUEMODE" })
  };

  const navigation = useNavigation();

    return (
      <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
        <View style={styles.container}>
          <View style={styles.headerRow}>
          <Text style={styles.headerText}>Options</Text>  
          </View>
          <View style={styles.button}>
          <Button
            color="#01050d"
            title='Clear User Data'
          />
          </View>
           <View style={styles.button}>
          <Button
            color="#01050d"
            title='Blue Mode'
            onPress={ blueThemeChange }
          />
          </View>
        </View>
        <View style={styles.container}>
           <Text style={styles.headerTwoText}>More</Text> 
           <Button
            title='About us'
             onPress={() => navigation.navigate('OptionsNav', {screen: 'AboutUs'} )}
            />
            <Button
            title='Privacy policy'
            />
        </View>
       
      </View>
    );
  }

export default OptionsScreen;
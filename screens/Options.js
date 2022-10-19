import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ThemeContext } from '../constants/context';
import styles from './Options.styles';

const OptionsScreen = ({ navigation }) => {

  const currentTheme = useContext (ThemeContext);
  const theme = currentTheme.state.theme;

  const blueThemeChange = ()  => {
          currentTheme.dispatch({ type: "BLUEMODE" })
  };

    return (
      <View style={ theme == 'light' ? styles.container_light : theme == 'dark' ? styles.container_dark : styles.container_blue }>
        <Text>Test Options Screen</Text>
        <Button
          title='Blue mode'
          onPress={ blueThemeChange }
        />
      </View>
    );
  }

export default OptionsScreen;
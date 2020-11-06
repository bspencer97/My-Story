import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT, ALT_COLOR } from '../constants/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class WorldsScreen extends Component {

    static navigationOptions = () => ({
        title: "Worlds",
        tabBarIcon: () => {
            return <MaterialCommunityIcons name="earth" size={30} color={SECONDARY_COLOR_LIGHT} />;
        }
    })

    onButtonPress = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            //Error
        }
    }

    render() {
        return (
            <View>
                <Header
                    leftComponent={headerProps.leftComponent}
                    centerComponent={headerProps.centerComponent}
                    rightComponent={headerProps.rightComponent}
                    backgroundColor={PRIMARY_COLOR}
                    outerContainerStyles={{borderBottomColor: ALT_COLOR, borderBottomWidth: 2}}
                />
                <Button 
                    title="Delete All Data"
                    buttonStyle={styles.buttonStyle}
                    textStyle={styles.textStyle}
                    onPress={this.onButtonPress}
                />

            </View>
        );
    }
}
const headerProps = {
    leftComponent: {
        icon: 'settings',
        color: SECONDARY_COLOR_LIGHT,
        size: 30
    },
    centerComponent: {
        text: 'My Worlds',
        style: {
            fontSize: 40,
            color: SECONDARY_COLOR_LIGHT,
            justifyContent: 'center' 
        }
    },
    rightComponent: {
        icon: 'add', 
        color: SECONDARY_COLOR_LIGHT,
        size: 30
    }
};

const styles = {
    buttonStyle: {
        marginTop: 10,
        backgroundColor: SECONDARY_COLOR
    },
    textStyle: {
        color: SECONDARY_COLOR_LIGHT,
        fontSize: 30
    }
};

export default WorldsScreen;

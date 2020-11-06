import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { PRIMARY_COLOR, SECONDARY_COLOR_LIGHT, ALT_COLOR } from '../constants/styles';
import { Foundation } from '@expo/vector-icons';

class NotesScreen extends Component {

    static navigationOptions = () => ({
        title: "Notes",
        tabBarIcon: () => {
            return <Foundation name="clipboard-notes" size={30} color={SECONDARY_COLOR_LIGHT} />;
        }
    })

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
        text: 'My Notes',
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

export default NotesScreen;

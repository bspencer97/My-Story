import React, { Component } from 'react';
import { View, Text, AsyncStorage, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Header } from 'react-native-elements';
import NavigationService from '../../NavigationService';
import { PRIMARY_COLOR, ALT_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT } from '../constants/styles';
import { MaterialIcons } from '@expo/vector-icons';

class CharactersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { characters: [], isLoading: true };
    }

    static navigationOptions = () => ({
        title: "Characters",
        tabBarIcon: () => {
            return <MaterialIcons name="person" size={30} color={SECONDARY_COLOR_LIGHT} />;
        }
    })

    componentDidMount() {
        this.willFocus = this.props.navigation.addListener('willFocus', () => {
            this.retrieveData().then((token) => {
                this.setState({
                    isLoading: false
                });
            });
        });
    }

    retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('characters');
          if (value !== null) {
            // We have data!! 
            var jsonValue = JSON.parse(value);
            this.state.characters = jsonValue  
          }
         } catch (error) {
           // Error retrieving data
         }
    }

    // renderNoMoreCards() {
    //     return ( 
    //         <Card title="No stories">
    //             <Button
    //                 title="Get started!"
    //                 large
    //                 backgroundColor='#BD71FF'
    //                 onPress = { NavigationService.navigate('storyCreate') }
    //             />
    //         </Card>
    //     );
    // }

    renderCard() {
        if (this.state.isLoading) {
            return <ActivityIndicator />
        }

        return this.state.characters.map(character => {
            const { 
                name,
                race,
                ethnicity,
                age,
                gender,
                //height,
                //design,
                personality,
                backstory,
                summary, 
                notes 
            } = character;
        
        return (
            <Card
                key={character.name} 
                title={character.name}
                titleStyle={styles.cardTitleStyle}
                containerStyle={{backgroundColor: SECONDARY_COLOR, borderColor: ALT_COLOR, borderWidth: 2}}
                dividerStyle={{borderColor: ALT_COLOR, borderWidth: 2.5}}
            >
                <View>
                    <Text style={styles.cardTextStyle}>{character.summary}</Text>
                </View>
            </Card>
        );
        });
    }

    render() {
        return (
            <ScrollView>
                <Header
                    leftComponent={headerProps.leftComponent}
                    centerComponent={headerProps.centerComponent}
                    rightComponent={headerProps.rightComponent}
                    backgroundColor={PRIMARY_COLOR}
                    outerContainerStyles={{borderBottomColor: ALT_COLOR, borderBottomWidth: 2}}
                />

                <ScrollView>
                    {this.renderCard()}
                </ScrollView>
                
            </ScrollView>
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
        text: 'My Characters',
        style: {
            fontSize: 35,
            color: SECONDARY_COLOR_LIGHT,
            justifyContent: 'center' 
        }
    },
    rightComponent: {
        icon: 'add',
        onPress: () => NavigationService.navigate('characterCreate'), 
        color: SECONDARY_COLOR_LIGHT,
        size: 30
    }
};

const styles = {
    // containerStyle: {
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center'
    // },
    cardTitleStyle: {
        fontSize: 25,
        color: SECONDARY_COLOR_LIGHT
    },
    cardTextStyle: {
        fontSize: 15,
        color: SECONDARY_COLOR_LIGHT
    }
};

export default CharactersScreen;

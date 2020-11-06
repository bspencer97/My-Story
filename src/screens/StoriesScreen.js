import React, { Component } from 'react';
import { View, Text, AsyncStorage, ScrollView, ActivityIndicator } from 'react-native';
import { Card, Header } from 'react-native-elements';
import NavigationService from '../../NavigationService';
import { PRIMARY_COLOR, SECONDARY_COLOR, SECONDARY_COLOR_LIGHT, ALT_COLOR } from '../constants/styles';
import { FontAwesome } from '@expo/vector-icons';

class StoriesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { stories: [], isLoading: true };
    }

    static navigationOptions = () => ({
        title: "Stories",
        tabBarIcon: () => {
            return <FontAwesome name="book" size={30} color={SECONDARY_COLOR_LIGHT} />
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
          const value = await AsyncStorage.getItem('stories');
          if (value !== null) {
            // We have data!! 
            var jsonValue = JSON.parse(value);
            this.state.stories = jsonValue  
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

        return this.state.stories.map(story => {
            const { characters, genre, plot, summary, title, world } = story;
        
        return (
            <Card
                key={story.title} 
                title={story.title}
                titleStyle={styles.cardTitleStyle}
                containerStyle={{backgroundColor: SECONDARY_COLOR, borderColor: ALT_COLOR, borderWidth: 2}}
                dividerStyle={{borderColor: ALT_COLOR, borderWidth: 2.5}}
            >
                <View>
                    <Text style={styles.cardTextStyle}>{story.summary}</Text>
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
        text: 'My Stories',
        style: {
            fontSize: 40,
            color: SECONDARY_COLOR_LIGHT,
            justifyContent: 'center' 
        }
    },
    rightComponent: {
        icon: 'add',
        color: SECONDARY_COLOR_LIGHT,
        size: 30,
        onPress: () => NavigationService.navigate('storyCreate') 
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

export default StoriesScreen;

import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Page
import PageBarOne from './pageBarOne';
import PageBarTwo from './pageBarTwo';
import PageBarThree from './pageBarThree';

const Tab = createBottomTabNavigator()

class PageBarContainer extends React.Component {
    render() {
        return(
            <Tab.Navigator
                activeColor="#f0edf6"
                inactiveColor="#3e2465">
                <Tab.Screen name={"Home"} component={PageBarOne}/>
                <Tab.Screen name={"Second"} component={PageBarTwo}/>
                <Tab.Screen name={"Third"} component={PageBarThree}/>
            </Tab.Navigator>

        );
    }
}

export default PageBarContainer;
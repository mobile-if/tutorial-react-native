import React from 'react';
import {View, Text} from 'react-native';

class PageBarOne extends React.Component {
    render() {
        return(
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Page Bar One</Text>
            </View>
        );
    }
}

export default PageBarOne;
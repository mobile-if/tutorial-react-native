import React from 'react';
import {View, Text} from 'react-native';

class PageBarOne extends React.Component {
    render() {
        return(
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: '100%',
                height: '100%'
            }}>
                <Text>Page Bar One</Text>
            </View>
        );
    }
}

export default PageBarOne;
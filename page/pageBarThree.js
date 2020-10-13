import React from'react';
import {View, Text} from 'react-native';

class PageBarThree extends React.Component {
    render() {
        return(
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Page Bar Three</Text>
            </View>
        );
    }
}

export default PageBarThree;
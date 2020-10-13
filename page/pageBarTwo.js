import React from 'react';
import {View, Text} from 'react-native';

class PageBarTwo extends React.Component {
    render() {
        return(
            <View style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Page Bar Two</Text>
            </View>
        );
    }
}

export default PageBarTwo;
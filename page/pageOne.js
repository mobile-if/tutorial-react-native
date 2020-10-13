import React from 'react';
import {View, Text, Button} from 'react-native';

class PageOne extends React.Component {
    render() {
        return(
            <View style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
                }}>
                <Text>Page One</Text>
                <Button
                    title={"Ke Page Two"}
                />
            </View>
        );
    }
}

export default PageOne;

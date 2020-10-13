import React from 'react';
import {View, Text, Button} from 'react-native';

class PageOne extends React.Component {    
    render() {
        const {navigation} = this.props;
        return(
            <View style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
                }}>
                <Text>Page One</Text>
                <Button
                    title={"Ke Page Two"}
                    onPress={() => navigation.navigate("PageTwo")}
                />
            </View>
        );
    }
}

export default PageOne;

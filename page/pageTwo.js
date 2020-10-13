import React from 'react';
import {View, Text, Button} from 'react-native';

class PageTwo extends React.Component {
    render() {
        return(
            <View  style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
                }}>
                <Text>Page Two</Text>
                <Button
                    title={"Ke Page Bottom Bar"}
                />
                <Button
                    title={"Ke Page One"}
                />
            </View>
        );
    }
}

export default PageTwo;
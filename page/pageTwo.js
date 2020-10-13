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
                <Text style={{marginBottom: 16}}>Page Two</Text>
                <Button
                    title={"Ke Page Bottom Bar"}/>
                <View style={{marginVertical: 8}}></View>
                <Button
                    title={"Ke Page One"}/>
            </View>
        );
    }
}

export default PageTwo;

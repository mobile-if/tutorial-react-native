import React from 'react';
import {View, Text, Button} from 'react-native';

export class ClassComponent extends React.Component{
    constructor() {
        super();

        this.state = {namaMahasiswa : "-", counter: 0, date: new Date()}
    }

    updateStatenya = () => {
        this.setState({namaMahasiswa: "MIS", counter: this.state.counter + 1})
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({date: new Date()}),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <View>
                <Text>Class Component</Text>
                <Text>{this.state.namaMahasiswa}</Text>
                <Text>{this.state.counter}</Text>
                <Text>{this.state.date.toString()}</Text>
                <Button onPress={this.updateStatenya} title={"Click Me"} />
            </View>
        )
    }
}

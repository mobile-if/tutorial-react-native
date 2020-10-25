import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

export function MahasiswaComponent(props){
    const [counter, setCounter] = useState(0)
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {clearInterval(timerID)};
    },  []);

    const updateCounter = () => {
        setCounter(counter + 1)
    }

    const handleButton = () => {
        updateCounter()
    }

    return (
        <View>
            <Text style={{textAlign: "center"}}>Function Component</Text>
            <Text>{counter}</Text>
            <Text>{date.toString()}</Text>
            <Text>{props.nama}</Text>
            <Text>{props.nrp}</Text>
            <Button onPress={() => {updateCounter()}} title={"Click Me"} />
            <Button onPress={() => {
                updateCounter()
            }} title={"Button 1"}/>
            <Button onPress={handleButton} title={"Button 2"}/>
        </View>
    )
}

import React from 'react';
import { View, Text, Button } from 'react-native';
import Detail from './Detail';

export default ({ navigation }) => (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text>Movies</Text>
        <Button
            title="Go Detail"
            onPress={() => navigation.navigate('Detail')}
        ></Button>
    </View>
);

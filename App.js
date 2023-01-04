import React from 'react';
import {View, Text, NativeModules, TouchableOpacity} from 'react-native';

const App = () => {
  const {CalendarModule} = NativeModules;
  const onPress = () => {
  CalendarModule.createCalendarEvent('testName', 'testLocation')
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'orange'}}
        onPress={onPress}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

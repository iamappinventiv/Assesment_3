import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const CheckBox = (props) => {
  const iconName = props.isChecked ? 'git' : 'comments';
  console.log(iconName);

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        <Text>
          <FontAwesome5 name={iconName} brand />
        </Text>
      </Pressable>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    marginTop: 5,
    marginHorizontal: 5,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>NEWS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#1877F2',
    height:50,
    justifyContent:'center',
    paddingLeft:8
  },
  text:{
    color:'white',
    fontWeight:'600'
  }

});

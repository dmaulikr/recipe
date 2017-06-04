import React, { Component } from 'react';
import { View, Text , StyleSheet} from "react-native"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    paddingBottom: 20
  }
});


class Header extends React.Component {
  render() {
    return(
      <View style={styles.container} >
          <Text>Home</Text>
          <Text>Users</Text>
          <Text>Recipes</Text>
          <Text>Food</Text>
      </View>
    )
  }
}



export default Header;
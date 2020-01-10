import React from "react";
import { StyleSheet, View } from "react-native";
const AppCard = props => {
  // <Button title="Config" /> */}
  return <View style={{ ...styles.default, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  default: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
    // for Ios
    // shadowColor: '#000',
    // shadowRadius: 2,
    // shadowOpacity: 0.2,
    // shadowOffset: {width: 2, height: 2},
    
    // forAndroid
    elevation: 8,
    backgroundColor: '#fff',
    borderRadius: 10
  }
});

export default AppCard;

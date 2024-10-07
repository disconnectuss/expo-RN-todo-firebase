import { View, Text } from "react-native";
import React from "react";

const Login: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize:20}}>This is login modal</Text>
    </View>
  );
};
export default Login;

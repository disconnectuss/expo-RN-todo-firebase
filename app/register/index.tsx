import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Register: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Register here</Text>
      <Link href="/login" asChild>
        <Button title="open login modal" onPress={() => {}}></Button>
      </Link>
    </View>
  );
};

export default Register;

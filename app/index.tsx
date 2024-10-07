import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HomePage: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          borderWidth: 1,
          borderColor: "red",
          fontSize: 20,
          padding: 10,
        }}
      >
        This is Home Page
      </Text>
      <Link href="/register" asChild >
      <Button title="Open register"/>
      </Link>
    </View>
  );
};

export default HomePage;

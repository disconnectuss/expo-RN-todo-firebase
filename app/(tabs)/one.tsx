import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const one: React.FC = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 20 }}>This is tab one</Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
};

export default one;

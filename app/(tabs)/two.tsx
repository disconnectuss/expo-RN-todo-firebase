import { Button, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const two: React.FC = () => {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: 20 }}>This is tab two</Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
};

export default two;

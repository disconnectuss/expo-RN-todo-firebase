import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs, useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

const _layout: React.FC = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="register/index"
        options={{
          title: "Register",
          headerRight: () => (
            <Button title="Login" onPress={() => router.push("/login")} />
          ),
        }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Login modal ", presentation: "modal" }}
      />
        <Stack.Screen name="(tabs)" options={{
            headerShown: false
        }} />
        <Stack.Screen name="[missing]" options={{
            title: '404'
        }} />
    </Stack>
    
  );
};

export default _layout;

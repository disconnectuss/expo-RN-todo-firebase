import React from "react";
import { Stack, Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="./one"
        options={{ headerTitle: "One", tabBarLabel: "One" }}
      />
      <Tabs.Screen
        name="./two"
        options={{ headerTitle: "Two", tabBarLabel: "Two" }}
      />
    </Tabs>
  );
};

export default _layout;

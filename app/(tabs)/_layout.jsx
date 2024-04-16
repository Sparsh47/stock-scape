import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({ icon, color, focused, name }) => {
  return (
    <View
      className={`items-center gap-2 flex-row rounded-md pr-2 ${
        focused ? "bg-primary" : "bg-transparent"
      }`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={focused ? "#dedcff" : color}
        className="w-4 h-4 mb-2"
      />
      {focused && (
        <Text
          className={`${
            focused ? "font-psemibold" : "font-pregular"
          } text-xs text-secondary mb-2`}
        >
          {name}
        </Text>
      )}
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#222",
            height: 60,
            paddingHorizontal: 10,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name="Bookmark"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="Create"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name="Profile"
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
      <StatusBar style="light" backgroundColor="#161617" />
    </>
  );
};

export default TabsLayout;

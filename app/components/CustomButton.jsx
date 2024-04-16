import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      className={`w-full bg-primary py-4 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color="#dedcff" />
      ) : (
        <Text className={`text-secondary text-lg font-psemibold ${textStyles}`}>
          {title}
        </Text>
      )}
      <StatusBar backgroundColor="#222" style="light" />
    </TouchableOpacity>
  );
};

export default CustomButton;

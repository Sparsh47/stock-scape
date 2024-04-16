import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import icons from "../../constants/icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (text) => {
    handleChangeText(text);
  };

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-md font-pmedium text-gray-100">
        {title !== "Search" && title}
      </Text>
      <View className="w-[90vw] flex-row items-center border-[1px] rounded-xl border-black-200 h-16 px-4 focus:border-primary bg-black-200">
        <TextInput
          className="flex-1 text-secondary font-psemibold text-md"
          value={value}
          onChangeText={handleInputChange}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title.toLowerCase() === "password" && !showPassword}
        />
        {title.toLowerCase() === "password" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
        {title.toLowerCase() === "search" && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={icons.search}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

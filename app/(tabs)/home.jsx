import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useGlobalContext } from "../../context/GlobalProvider";
import images from "../../constants/images";
import FormField from "../components/FormField";

const home = () => {
  const { user } = useGlobalContext();
  const [search, setSearch] = useState("");

  const handleInputChange = (search) => {
    setSearch(search);
  };

  return (
    <View className="justify-center items-center flex-1 bg-background">
      <View className="flex-row items-center justify-between w-full px-6">
        <View>
          <Text className="text-secondary text-md font-pregular">
            Welcome Back
          </Text>
          <Text className="text-secondary text-2xl font-psemibold">
            {user.username}
          </Text>
        </View>
        <Image
          source={images.logoSmall}
          className="w-[50px] h-[50px]"
          resizeMode="contain"
        />
      </View>
      <FormField
        title="Search"
        value={search}
        placeholder="Search for a video topic"
        handleChangeText={handleInputChange}
      />
    </View>
  );
};

export default home;

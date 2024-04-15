import { ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView>
        <View>
          <Text className="text-secondary">Sign In</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import CustomButton from "./components/CustomButton";
import { router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="absolute top-[7.5vh] w-full h-full items-center px-5">
          <View className="flex flex-row items-center justify-center h-[100px] gap-2">
            <Image
              source={images.logoSmall}
              className="w-[35px]"
              resizeMode="contain"
            />
            <Text className="text-secondary font-bold text-3xl pt-1">
              Vizly
            </Text>
          </View>
          <Image
            source={images.cards}
            className="absolute -top-1/4 mt-5 max-w-[380px] w-full h-full"
            resizeMode="contain"
          />
          <View className="relative top-1/3 mt-5">
            <Text className="text-secondary text-3xl text-center font-bold">
              Discover endless possibilities with{" "}
              <Text className="text-primary">Vizly</Text>
            </Text>
          </View>
          <Text className="absolute text-white text-center bottom-[270px] text-sm font-pregular">
            Where creativity meets innovation: embark on a journey of limitless
            exploration with vizly
          </Text>
          <View className="absolute bottom-1/4 w-full">
            <CustomButton
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

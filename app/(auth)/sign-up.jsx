import { Alert, Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import images from "../../constants/images";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChangeUsername = (username) => {
    setForm({ ...form, username });
  };

  const handleChangeEmail = (email) => {
    setForm({ ...form, email });
  };

  const handleChangePassword = (password) => {
    setForm({ ...form, password });
  };

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields.");
    }
    setLoading(true);
    try {
      const result = await createUser(form.username, form.email, form.password);
      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (err) {
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="bg-background h-full">
      <ScrollView>
        <View className="w-full h-[100vh] justify-center items-center px-4 mt-7">
          <View className="flex flex-row items-center justify-center gap-2 h-[50px]">
            <Image
              source={images.logoSmall}
              className="w-[35px]"
              resizeMode="contain"
            />
            <Text className="text-secondary font-bold text-3xl pt-1">
              Vizly
            </Text>
          </View>
          <Text className="text-2xl text-secondary font-psemibold mt-10">
            Signup to Vizly
          </Text>
          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your username"
            handleChangeText={handleChangeUsername}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your email"
            handleChangeText={handleChangeEmail}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your password"
            handleChangeText={handleChangePassword}
            otherStyles="mt-7"
          />
          <CustomButton
            containerStyles="mt-7"
            title="Sign Up"
            handlePress={submit}
            isLoading={loading}
          />
          <View className="justify-center w-full items-center flex-row pt-5">
            <Text className="text-secondary font-pregular">
              Already have an account?{" "}
            </Text>
            <Link href="/sign-in" className="text-primary font-pregular">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

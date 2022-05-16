import { Center, Heading, Text, VStack } from "native-base";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-native";
import { NativeBaseIcon } from "../assets/Icons";
import { ThemeToggle } from "../components";
import { GetOneUser } from "../lib/services";

const Home = () => {
  // const { isLoading, error, data: user } = useQuery("userData", () => GetOneUser());
  // console.log(user);
  return (
    <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg"> Home </Heading>
        <ThemeToggle />
        <Link to={`/form`} underlayColor="#f0f4f7">
          <Text> Form Example </Text>
        </Link>
      </VStack>
    </Center>
  );
};

export default Home;

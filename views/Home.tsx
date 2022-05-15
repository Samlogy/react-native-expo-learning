import { Center, Heading, VStack } from "native-base";
import React from "react";
import { ThemeToggle } from "../components";
import { NativeBaseIcon } from "../assets/Icons";

const Home = () => {
  return (
    <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
      <VStack space={5} alignItems="center">
        <NativeBaseIcon />
        <Heading size="lg"> Home </Heading>
        <ThemeToggle />
      </VStack>
    </Center>
  );
};

export default Home;

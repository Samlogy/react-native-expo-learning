import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Center, VStack } from "native-base";
import React from "react";
import { useForm } from "react-hook-form";
import { InputField } from "../components";
import { loginSchema } from "../lib/validation";

function Login() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onLogin = (data: any) => {
    console.log("login ", data);
  };
  return (
    <Center _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} px={4} flex={1}>
      <VStack width="80%" space={4}>
        <InputField control={control} errors={errors} placeholder="email@example.com" name="email" defaultValue={""} label="Email Address" />
        <InputField control={control} errors={errors} placeholder="*********" name="password" defaultValue={""} label="Password" />

        <Button onPress={handleSubmit(onLogin)} colorScheme="orange">
          Submit
        </Button>
        <Button onPress={() => reset()} colorScheme="orange" variant="subtle">
          Reset
        </Button>
      </VStack>
    </Center>
  );
}

export default Login;

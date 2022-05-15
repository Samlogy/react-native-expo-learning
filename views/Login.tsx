import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Center, VStack, Heading } from "native-base";
import React from "react";
import { useForm } from "react-hook-form";
import { InputField, Layout, ThemeToggle } from "../components";
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
    // api call
  };
  return (
    <Layout>
      <Center>
        <VStack justifyContent="center" width="80%" h="100%" space={4}>
          <Heading size="xl" textAlign="center" textTransform="uppercase">
            Login
          </Heading>

          <InputField control={control} errors={errors} placeholder="email@example.com" name="email" defaultValue={""} label="Email Address" />
          <InputField control={control} errors={errors} placeholder="*********" name="password" defaultValue={""} label="Password" />
          <Button onPress={handleSubmit(onLogin)} colorScheme="orange" borderRadius={"10px"} fontWeight="600" textTransform={"uppercase"}>
            Submit
          </Button>
          <Button onPress={() => reset()} colorScheme="orange" variant="subtle" borderRadius={"10px"} fontWeight="600" textTransform={"uppercase"}>
            Reset
          </Button>
          <ThemeToggle />
        </VStack>
      </Center>
    </Layout>
  );
}

export default Login;

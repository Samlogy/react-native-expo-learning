import { Flex } from "native-base";
import React, { ReactNode } from "react";

interface ILayout {
  children: ReactNode;
  [restPorps: string]: any;
}

export default function Layout({ children, ...restProps }: ILayout) {
  return (
    <Flex px={5} _dark={{ bg: "blueGray.900" }} _light={{ bg: "blueGray.50" }} {...restProps}>
      {children}
    </Flex>
  );
}

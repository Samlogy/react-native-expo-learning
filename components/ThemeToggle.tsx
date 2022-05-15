import { HStack, Switch, Text, useColorMode } from "native-base";

function ThemeToggle() {
  const { colorMode: mode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={mode === "light"}
        onToggle={toggleColorMode}
        aria-label={mode === "light" ? "switch to dark mode" : "switch to light mode"}
      />
      <Text>Light</Text>
    </HStack>
  );
}

export default ThemeToggle;

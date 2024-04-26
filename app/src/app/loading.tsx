import { Center, Loading as Spinner } from "@yamada-ui/react";

const Loading = () => {
  return (
    <Center w="100vw" h="100dvh">
      <Spinner size="5xl" />
    </Center>
  );
};

export default Loading;

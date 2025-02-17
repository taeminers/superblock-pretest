import Image from "next/image";
import Flex from "../Core/Flex";
import * as S from "./styles.css";

export const GameStartBanner = () => {
  return (
    <Flex flexDirection="column" items="center">
      <Image
        src={"/superblock-logo.jpg"}
        width={100}
        height={100}
        alt="logo"
        className={S.logo}
      />
      <h1>Balloon Game by SuperBlock!</h1>
    </Flex>
  );
};

import Flex from "../Core/Flex";
import * as S from "./styles.css";
export const MatrixSizeUserInput = () => {
  return (
    <Flex flexDirection="column" items={"center"} gap={12}>
      <input className={S.inputStyle} placeholder="Insert Matrix Size" />
      <button className={S.buttonStyle}>Start</button>
    </Flex>
  );
};

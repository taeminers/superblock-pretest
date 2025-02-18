"use client";
import { useMatrixSizeStore } from "@/zustand/useMatrixSizeStore";
import Flex from "../Core/Flex";
import * as S from "./styles.css";
import { useRouter } from "next/navigation";
export const MatrixSizeUserInput = () => {
  const {
    matrixSizeCols,
    matrixSizeRows,
    setMatrixSizeCols,
    setMatrixSizeRows,
  } = useMatrixSizeStore();
  const router = useRouter();
  const onClickStart = () => {
    if (matrixSizeCols > 0 && matrixSizeRows > 0) {
      router.push("/game-start");
    }
  };
  return (
    <Flex flexDirection="column" items={"center"} gap={12}>
      <label htmlFor="matrix-col-input">Matrix Column Size</label>
      <input
        id="matrix-col-input"
        className={S.inputStyle}
        placeholder="Insert Matrix Column Size"
        onChange={(e) => setMatrixSizeCols(Number(e.target.value))}
      />
      <label htmlFor="matrix-row-input">Matrix Row Size</label>
      <input
        id="matrix-row-input"
        className={S.inputStyle}
        placeholder="Insert Matrix Row Size"
        onChange={(e) => setMatrixSizeRows(Number(e.target.value))}
      />
      <button className={S.buttonStyle} onClick={onClickStart}>
        Start
      </button>
    </Flex>
  );
};

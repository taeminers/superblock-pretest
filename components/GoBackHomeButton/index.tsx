"use client";
import Link from "next/link";
import * as S from "./styles.css";
import { useMatrixSizeStore } from "@/zustand/useMatrixSizeStore";
export const GoBackHomeButton = () => {
  const { setMatrixSizeCols, setMatrixSizeRows } = useMatrixSizeStore();
  const resetHandler = () => {
    setMatrixSizeCols(0);
    setMatrixSizeRows(0);
  };
  return (
    <Link href="/" className={S.buttonStyle} onClick={resetHandler}>
      Go Back Home
    </Link>
  );
};

"use client";
import Link from "next/link";
import * as S from "./styles.css";
import { useMatrixSizeStore } from "@/zustand/useMatrixSizeStore";
import { useModalStore } from "@/zustand/useModalStore";

interface GoBackHomeButtonProps {
  modalType?: "gameOver" | "gameComplete";
}

export const GoBackHomeButton = ({
  modalType = "gameOver",
}: GoBackHomeButtonProps) => {
  const { setMatrixSizeCols, setMatrixSizeRows } = useMatrixSizeStore();
  const { closeGameOverModal, closeGameCompleteModal } = useModalStore();
  const resetHandler = () => {
    setMatrixSizeCols(0);
    setMatrixSizeRows(0);
    if (modalType === "gameOver") {
      closeGameOverModal();
    } else {
      closeGameCompleteModal();
    }
  };
  return (
    <Link href="/" className={S.buttonStyle} onClick={resetHandler}>
      Go Back Home
    </Link>
  );
};

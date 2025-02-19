import Flex from "../Core/Flex";
import { GoBackHomeButton } from "../GoBackHomeButton";
import * as S from "./styles.css";
export const GameOverModal = () => {
  return (
    <div className={S.modalOverlay}>
      <div className={S.modalContent}>
        <Flex flexDirection="column">
          <h1>Game Over</h1>
          <GoBackHomeButton modalType="gameOver" />
        </Flex>
      </div>
    </div>
  );
};

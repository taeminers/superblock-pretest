import Flex from "../Core/Flex";
import { GoBackHomeButton } from "../GoBackHomeButton";
import * as S from "./styles.css";
export const GameCompleteModal = () => {
  return (
    <div className={S.modalOverlay}>
      <div className={S.modalContent}>
        <Flex flexDirection="column">
          <h1>You Win!</h1>
          <GoBackHomeButton modalType="gameComplete" />
        </Flex>
      </div>
    </div>
  );
};

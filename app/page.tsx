import Flex from "@/components/Core/Flex";
import { GameStartBanner } from "@/components/GameStartBanner";
import { MatrixSizeUserInput } from "@/components/MartixSizeUserInput";
import * as S from "./styles.css";
export default function Home() {
  return (
    <main>
      <section>
        <Flex
          justify="center"
          items="center"
          flexDirection="column"
          className={S.globalContainer}
        >
          <GameStartBanner />
          <MatrixSizeUserInput />
        </Flex>
      </section>
    </main>
  );
}

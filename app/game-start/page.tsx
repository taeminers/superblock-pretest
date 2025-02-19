import { GameRules } from "@/components/GameRules";
import { Grid } from "@/components/Grid";
import * as S from "./styles.css";
import { GoBackHomeButton } from "@/components/Core/GoBackHomeButton";

export default function GameStartPage() {
  return (
    <main className={S.contentContainer}>
      <GameRules />
      <Grid />
      <GoBackHomeButton />
    </main>
  );
}

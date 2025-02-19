import { GameRules } from "@/components/GameRules";
import { Grid } from "@/components/Grid";
import * as S from "./styles.css";

export default function GameStartPage() {
  return (
    <main className={S.contentContainer}>
      <GameRules />
      <Grid />
    </main>
  );
}

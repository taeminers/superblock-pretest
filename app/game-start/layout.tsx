import * as S from "./styles.css";

export default function GameStartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="game-start-grid" className={S.layoutContainer}>
      {children}
    </section>
  );
}

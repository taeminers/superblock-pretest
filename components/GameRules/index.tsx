import Flex from "../Core/Flex";

export const GameRules = () => {
  return (
    <Flex flexDirection="column">
      <h1>Game Rules</h1>
      <ol>
        <li>
          풍선을 클릭 시 터지게 되며, 상하좌우로 연결된 경우 같이 터지게 됩니다.
        </li>
        <li>
          사용자는 한번에 가장 많은 풍선을 터뜨릴 수 있는 순서대로 풍선을
          클릭해야 합니다. (큰 → 작은 순서, 동일한 크기일 시 순서 상관 없음.)
        </li>
        <li>위 조건에 맞지 않는 풍선을 클릭하면 게임에서 패배합니다.</li>
      </ol>
    </Flex>
  );
};

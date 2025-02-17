import React from "react";
import clsx from "clsx";
import flex, { gap } from "./styles.css";
// 개인 프로젝트에서 가지고 온 코드. 그냥 기본적인 코어 flex 컴포넌트이다.
export interface FlexProps {
  className?: string;
  children: React.ReactNode;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  items?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: keyof typeof gap | number;
  wrap?: "nowrap" | "wrap";
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Flex = ({ children, className, onClick, gap, ...rest }: FlexProps) => {
  const stringGap = typeof gap === "string" ? gap : undefined;
  const numberGap = typeof gap === "number" ? `${gap}px` : undefined;
  return (
    <div
      className={clsx(flex({ ...rest, gap: stringGap }), className)}
      style={{ gap: numberGap }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;

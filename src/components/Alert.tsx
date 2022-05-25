import React from "react";
import styled from "styled-components";
import { COLORS } from "@holism/components";
import { Paragraph } from "@holism/components";
import { AttentionIcon, StatusOkIcon } from "@holism/icons";
import { baseBorderRadius } from "../styles/base";

interface Props {
  view: "success" | "warning";
  width?: string;
  children: string;
}

export function Alert({ view, width, children }: Props) {
  const renderIcon = () => {
    switch (view) {
      case "success":
        return <StatusOkIcon size={20} />;
      case "warning":
        return <AttentionIcon size={20} />;
    }
  };
  return (
    <Styled view={view} width={width}>
      <div>{renderIcon()}</div>
      <div className="text">
        <Paragraph size={14}>{children}</Paragraph>
      </div>
    </Styled>
  );
}

const getColor = (view: Props["view"]) => {
  switch (view) {
    case "success":
      return COLORS.green;
    case "warning":
      return COLORS.orange;
  }
};

export const Styled = styled("div")<Pick<Props, "width" | "view">>`
  border: 1px solid ${({ view }) => getColor(view)};
  background-color: ${COLORS.johnSnow};
  border-radius: ${baseBorderRadius};
  padding: 0.5rem;
  width: ${({ width = "inherit" }) => width};
  height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

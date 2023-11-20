import React from "react";
import { RocketIcon } from "../../icons/RocketIcon";
import { HomeLink } from "../HomeLink";

export const ACTION_ROW_PADDING = "8px 6px";

const style: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  color: "white",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  padding: ACTION_ROW_PADDING,
  justifyContent: "flex-end",
  background: "rgba(255, 255, 255, 0.03)",
};

export const BottomRow = () => {
  return (
    <div style={style}>
      {/**
      // TODO: Make this
       */}
      <HomeLink
        href="https://example.com"
        label="How we made Unwrapped"
        icon={(props) => <RocketIcon {...props} />}
      />
    </div>
  );
};
import { AbsoluteFill } from "remotion";

export const Description: React.FC = () => {
  return (
    <AbsoluteFill>
      <div
        style={{
          color: "white",
          fontSize: 180,
          top: 300,
          position: "absolute",
          right: 200,
          fontFamily: "Mona Sans",
          fontWeight: 800,
        }}
      >
        Your t<span style={{ fontWeight: 200 }}>o</span>p <br /> languages{" "}
        <br /> of 2023
      </div>
    </AbsoluteFill>
  );
};
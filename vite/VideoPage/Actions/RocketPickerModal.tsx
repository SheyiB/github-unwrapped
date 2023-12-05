import { useEffect, useMemo, useRef, type SetStateAction } from "react";
import { AbsoluteFill } from "remotion";
import type { RocketColor } from "../page";
import { ModalRocket } from "./ModalRocket";

const modalStyle: React.CSSProperties = {
  background: "#181B28",
  color: " black",
  zIndex: 10,
  borderRadius: 16,
  boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.04)",
  position: "fixed",
  top: "45%",
  left: "10%",
  padding: 16,
  opacity: 1,
};

const spacer: React.CSSProperties = {
  width: 64,
};

export const RocketPickerModal: React.FC<{
  setRocket: React.Dispatch<SetStateAction<RocketColor>>;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}> = ({ setRocket, setIsModalOpen, isModalOpen }) => {
  // set rocket color based on which one is clicked
  const modalRef = useRef<HTMLDivElement>(null);

  const dynamicBackground: React.CSSProperties = useMemo(() => {
    console.log("isModalOpen", isModalOpen);
    return {
      backgroundColor: isModalOpen ? "rgba(0,0,0,0.5)" : "transparent",
      zIndex: 9,
    };
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        console.log("clicked outside");
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, setIsModalOpen]);

  console.log("isModalOpen: ", isModalOpen);
  return (
    <AbsoluteFill style={dynamicBackground}>
      <div ref={modalRef} style={modalStyle}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={spacer} />
          <ModalRocket
            rocket={"orange"}
            setRocket={setRocket}
            setIsModalOpen={setIsModalOpen}
          />
          <div style={spacer} />
          <ModalRocket
            rocket={"blue"}
            setRocket={setRocket}
            setIsModalOpen={setIsModalOpen}
          />
          <div style={spacer} />
          <ModalRocket
            rocket={"yellow"}
            setRocket={setRocket}
            setIsModalOpen={setIsModalOpen}
          />
          <div style={spacer} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
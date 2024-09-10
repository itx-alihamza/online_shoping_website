"use client"; // This makes the component a client component
import React from "react";
import { useModal } from "../context/ModalContext";
import SideNavModal from "./sideNavModal/SideNavModal";

const ModalHandler: React.FC = () => {
  const { modalType, isOpen } = useModal();

  return (
    <>
      {isOpen && modalType === "sideNav" && <SideNavModal />}
      {/* Add other modals here based on modalType if needed */}
    </>
  );
};

export default ModalHandler;

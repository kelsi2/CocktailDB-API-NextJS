import React from "react";
interface ModalOverlayProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({
  openModal,
  setOpenModal,
}: ModalOverlayProps) => {
  if (!openModal) {
    return null;
  }

  const handleClick = (): void => {
    setOpenModal(!openModal);
  };

  return <div className="modal-overlay-background" onClick={handleClick} />;
};

export default ModalOverlay;

import React from "react";
import Image from "next/image";
interface CloseModalButtonProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  closeButtonImage: string;
  className: string;
}

const CloseModalButton = ({
  setOpenModal,
  openModal,
  closeButtonImage,
  className,
}: CloseModalButtonProps) => {
  const handleClick = (event: React.SyntheticEvent): void => {
    setOpenModal(!openModal);
  };
  return (
    <button className={className} onClick={handleClick}>
      <Image src={closeButtonImage} alt="Close Modal" width="24" height="24" />
    </button>
  );
};

export default CloseModalButton;

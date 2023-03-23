import React, { Fragment, FunctionComponent } from "react";
import CloseModalButton from "./CloseModalButton";
import ModalOverlay from "./ModalOverlay";

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  closeModal?: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  openModal,
  setOpenModal,
  children,
}: ModalProps) => {
  if (!openModal) {
    return null;
  }

  return (
    <Fragment>
      <ModalOverlay openModal={openModal} setOpenModal={setOpenModal} />
      <div className="modal">
        <CloseModalButton
          setOpenModal={setOpenModal}
          openModal={openModal}
          closeButtonImage={"/close-modal-icon.png"}
          className="close-modal-button"
        />
        {children}
      </div>
    </Fragment>
  );
};

export default Modal;

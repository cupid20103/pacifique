import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
// @import styles
import {
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalWrapper,
} from "./modal.styled";

const Modal = (props) =>
  props.show
    ? ReactDOM.createPortal(
        <ModalWrapper>
          <ModalClose onClick={props.onClose} />
          <ModalContainer>
            <ModalContent>
              <ModalHeader>
                <b>
                  {props.title} | {props.role}
                </b>
                <FaTimes onClick={props.onClose} />
              </ModalHeader>
              <div>
                <p>{props.intro}</p>
                <p>{props.career}</p>
                <p>{props.join}</p>
              </div>
            </ModalContent>
          </ModalContainer>
        </ModalWrapper>,
        document.getElementById("root")
      )
    : null;
export default Modal;

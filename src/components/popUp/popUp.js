import React from "react";
import "./style.css";
import { FaRegTimesCircle } from "react-icons/fa";
import { Modal } from "react-bootstrap";

export default function Popup(props) {
  const { children, open = false, setOpen, fullwidth = false,height } = props;
  return (
    <>
      <Modal
        fullscreen={fullwidth}
        show={open}
        onHide={() => setOpen(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="modalClass"
        // style={{borderRadius:'10%'}}
      >
        <div className="close-icon">
          <span
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => setOpen(false)}
            >
            <FaRegTimesCircle />
          </span>
        </div>
        {children}
 
      </Modal>
    </>
  );
}

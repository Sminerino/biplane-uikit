import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

const Modal = ({ children, size, onClose }) =>
  ReactDOM.createPortal(
    <div className="bui-modal__container">
      <div className={classNames("bui-modal", `bui-modal_size_${size}`)}>
        <div className="bui-modal__close" onClick={onClose}>
          ⨉
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );

Modal.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium"]),
  onClose: PropTypes.func
};

Modal.defaultProps = {
  children: undefined,
  size: "small",
  onClose: () => void 0
};

export default Modal;

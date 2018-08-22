import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

class Modal extends React.Component {
  modalRef = React.createRef();

  closeModal = () => {
    this.modalRef.classList.add('bui-modal__container_closing');
    setTimeout(this.props.onClose, 300);
  };

  render() {
    const { children, size } = this.props;
    return (
      ReactDOM.createPortal(
        <div className="bui-modal__container" ref={div => this.modalRef = div}>
          <div className={classNames("bui-modal", `bui-modal_size_${size}`)}>
            <div className="bui-modal__close" onClick={this.closeModal}>
              ⨉
            </div>
            {children}
          </div>
        </div>,
        document.getElementById("modal-root")
      )
    )
  }
}

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

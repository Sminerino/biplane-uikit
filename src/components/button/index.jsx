import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

const Button = ({ children, appearance, disabled, onClick }) => (
  <div
    className={classNames(
      "bui-button",
      disabled && "bui-button_disabled",
      `bui-button_${appearance}`
    )}
    onClick={disabled ? undefined : onClick}
  >
    {children}
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: undefined,
  appearance: "primary",
  disabled: false,
  onClick: () => void 0
};

export default Button;

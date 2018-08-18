import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

const Checkbox = ({ label, disabled, ...rest }) => (
  <label className={classNames("bui-checkbox", disabled && "bui-checkbox_disabled")}>
    {label}
    <input type="checkbox" {...rest} disabled={disabled}/>
    <span className="bui-checkbox__mark" />
  </label>
);

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  label: "",
  disabled: false
};

export default Checkbox;

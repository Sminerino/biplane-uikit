import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

const Tooltip = ({ label, children }) => (
  <div className="bui-tooltip">
    <div className="bui-tooltip__content">{children}</div>
    <div className="bui-tooltip__label-container">
      <div className="bui-tooltip__label">
        <div className="bui-tooltip__triangle" />
        {label}
      </div>
    </div>
  </div>
);

Tooltip.propTypes = {
  label: PropTypes.node,
  children: PropTypes.node
};

Tooltip.defaultProps = {
  label: "",
  children: undefined
};

export default Tooltip;

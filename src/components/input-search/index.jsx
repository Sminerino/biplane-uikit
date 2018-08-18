import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

const Search = ({ placeholder, disabled, ...rest }) => (
  <div
    className={classNames("bui-input-search", disabled && "bui-input-search_disabled")}
  >
    <input
      type="text"
      spellCheck={false}
      placeholder={placeholder}
      disabled={disabled}
      {...rest}
    />
    <img
      src={require("./../../res/images/icon-search.svg")}
      className="bui-input-search__icon"
      alt=""
    />
  </div>
);

Search.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
};

Search.defaultProps = {
  placeholder: "",
  disabled: false
};

export default Search;

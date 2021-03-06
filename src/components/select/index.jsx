import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

const reduceOptions = options =>
  options.reduce((acc, option) => {
    acc[option.value] = option;
    return acc;
  }, {});

class Select extends React.Component {
  state = {
    dropdownOpened: false
  };

  memoizeOptionsMap = options => {
    if (this.opt === options) {
      return this.optionsMap;
    }

    this.opt = options;
    this.optionsMap = reduceOptions(options);
    return this.optionsMap;
  };

  dropdownRef = React.createRef();

  openDropdown = () => this.setState({ dropdownOpened: true });
  closeDropdown = () => {
    this.dropdownRef.current &&
      this.dropdownRef.current.classList.add("bui-select__options_closing");
    setTimeout(() => this.setState({ dropdownOpened: false }), 150);
  };

  handleSelect = e => {
    if (e.target.attributes.value.nodeValue !== this.props.value)
      this.props.onChange(e.target.attributes.value.nodeValue);
  };

  render() {
    const { options, disabled, value: selectValue, placeholder } = this.props;
    const dropdownOpened = this.state.dropdownOpened;
    const optionsMap = this.memoizeOptionsMap(options);

    return (
      <div
        className={classNames(
          "bui-select",
          disabled && "bui-select_disabled",
          dropdownOpened && "bui-select_active"
        )}
        onClick={
          disabled
            ? undefined
            : this.state.dropdownOpened
              ? this.closeDropdown
              : this.openDropdown
        }
        onBlur={this.closeDropdown}
        tabIndex={0}
      >
        <div className="bui-select__button">
          {selectValue !== undefined && optionsMap[selectValue]
            ? optionsMap[selectValue].label
            : placeholder}
        </div>
        {dropdownOpened && (
          <div className="bui-select__options" ref={this.dropdownRef}>
            {options.map(({ label, value }) => (
              <option
                className={classNames(
                  "bui-select__option",
                  selectValue === value && "bui-select__option_selected"
                )}
                onClick={this.handleSelect}
                value={value}
                key={value}
              >
                {label}
              </option>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

Select.defaultProps = {
  options: [],
  disabled: false,
  onChange: () => void 0,
  placeholder: "Select item"
};

export default Select;

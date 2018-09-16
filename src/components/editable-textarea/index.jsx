import React from "react";
import PropTypes from "prop-types";
import EditableBox from "../__editable-box";
import classNames from "classnames";
import style from "./style.css";

class EditableTextarea extends React.Component {
  onInputChange = e => this.props.onChange(e.target.value);

  render() {
    const { value, readOnly } = this.props;
    return (
      <EditableBox
        readOnly={readOnly}
        render={editing => (
          <textarea
            onChange={this.onInputChange}
            className="bui-editable-textarea__input"
            readOnly={!editing}
            value={value}
          />
        )}
      />
    );
  }
}

EditableTextarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};

EditableTextarea.defaultProps = {
  onChange: () => void 0
};

export default EditableTextarea;

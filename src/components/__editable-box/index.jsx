import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./style.css";

class EditableBox extends React.Component {
  state = {
    editing: false
  };

  focus = () => this.setState({ editing: true });

  blur = () => this.setState({ editing: false });

  render() {
    const { editing } = this.state;
    const { render, readOnly } = this.props;
    return (
      <div
        className={classNames(
          "bui-editable-box",
          readOnly && "bui-editable-box_readonly",
          editing && "bui-editable-box_editing"
        )}
      >
        <div className="bui-editable-box__content">
          {render(editing, this.focus, this.blur)}
        </div>
        {!readOnly && (
          <div
            className="bui-editable-box__edit-button"
            onClick={editing ? this.blur : this.focus}
          >
            {editing ? (
              <div className="bui-editable-box__stop-edit">⨉</div>
            ) : (
              <img draggable={false} src={require("./icon-button-edit.svg")} />
            )}
          </div>
        )}
      </div>
    );
  }
}

EditableBox.propTypes = {
  readOnly: PropTypes.bool,
  render: PropTypes.func.isRequired
};

EditableBox.defaultProps = {
  readOnly: false
};

export default EditableBox;

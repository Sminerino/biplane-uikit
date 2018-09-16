import React from "react";
import PropTypes from "prop-types";
import EditableBox from "../__editable-box";
import classNames from "classnames";
import style from "./style.css";

class Tag extends React.PureComponent {
  onDelete = () => this.props.onDelete(this.props.index);

  render() {
    const { value, deletable } = this.props;
    return (
      <div className="bui-editable-tagbox__tag">
        {value}
        {deletable && (
          <div
            className="bui-editable-tagbox__tag-delete"
            onClick={this.onDelete}
          >
            ❌
          </div>
        )}
      </div>
    );
  }
}

class EditableTagbox extends React.Component {
  state = {
    inputValue: ""
  };

  deleteTag = index => {
    this.props.tags.splice(index, 1);
    this.props.onChange(this.props.tags);
  };

  createNewTag = value => {
    if (value && !this.props.tags.includes(value)) {
      this.props.tags.push(value);
      this.props.onChange(this.props.tags);
    }
    this.setState({ inputValue: "" });
  };

  onInputChange = e => this.setState({ inputValue: e.target.value });

  onInputBlur = e => {
    this.createNewTag(e.target.value);
  };

  onInputKeyPress = e => {
    //space or enter
    if (e.keyCode === 32 || e.keyCode === 13) {
      e.preventDefault();
      this.createNewTag(e.target.value.trim());
    }
  };

  render() {
    const { tags, maxCount, newTagPlaceholder, readOnly } = this.props;
    const { inputValue } = this.state;
    return (
      <EditableBox
        readOnly={readOnly}
        render={editing => (
          <div className="bui-editable-tagbox__tag-container">
            {tags.slice(0, maxCount).map((tag, index) => (
              <Tag
                index={index}
                value={tag}
                key={tag}
                deletable={editing}
                onDelete={this.deleteTag}
              />
            ))}
            {editing &&
              maxCount > tags.length && (
                <input
                  className="bui-editable-tagbox__input"
                  value={inputValue}
                  onChange={this.onInputChange}
                  onKeyDownCapture={this.onInputKeyPress}
                  onBlur={this.onInputBlur}
                  placeholder={newTagPlaceholder}
                />
              )}
          </div>
        )}
      />
    );
  }
}

EditableTagbox.propTypes = {
  maxCount: PropTypes.number,
  newTagPlaceholder: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  readOnly: PropTypes.bool
};

EditableTagbox.defaultProps = {
  maxCount: 10,
  newTagPlaceholder: "New tag",
  onChange: () => void 0
};

export default EditableTagbox;

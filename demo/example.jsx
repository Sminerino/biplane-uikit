import React from "react";
import {
  Button,
  Select,
  Checkbox,
  Tooltip,
  Modal,
  numberFormatter,
  EditableTextarea,
  EditableTagbox
} from "../src/index";

class Example extends React.Component {
  state = {
    selectValue: undefined,
    modalOpen: false,
    textareaValue: "Default textarea value",
    tags: ["1", "2", "3av", "243"]
  };

  render() {
    return (
      <React.Fragment>
        {this.state.modalOpen && (
          <Modal onClose={() => this.setState({ modalOpen: false })}>
            <ol>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
            </ol>
          </Modal>
        )}
        <h3>Select</h3>
        <Select
          value={this.state.selectValue}
          onChange={value => this.setState({ selectValue: value })}
          options={[
            {
              label: "long long long long long long long long label",
              value: "1"
            },
            { label: "2", value: "2" }
          ]}
        />

        <h3>Button</h3>
        <div style={{ marginBottom: 10 }}>
          <Button>Primary button</Button>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Button appearance="secondary">Secondary button</Button>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Button disabled>Primary disabled</Button>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Button appearance="secondary" disabled>
            Secondary disabled
          </Button>
        </div>

        <h3>Checkbox</h3>
        <div>
          <Checkbox label="something" />
        </div>
        <div>
          <Checkbox label="something disabled" disabled />
        </div>

        <h3>Tooltip</h3>
        <Tooltip label="useful tooltip OMGScoots">
          <Button>hover me</Button>
        </Tooltip>

        <h3>Modal</h3>
        <Button
          appearance="secondary"
          onClick={() => this.setState({ modalOpen: true })}
        >
          Press me to open modal
        </Button>
        <h3>EditableTextarea</h3>
        <EditableTextarea
          value={this.state.textareaValue}
          onChange={value => this.setState({ textareaValue: value })}
        />
        <h3>EditableTagbox</h3>
        <EditableTagbox
          tags={this.state.tags}
          onChange={tags => this.setState({ tags })}
        />
      </React.Fragment>
    );
  }
}

export default Example;

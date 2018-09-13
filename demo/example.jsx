import React from "react";
import {
  Button,
  Select,
  Checkbox,
  Tooltip,
  Modal,
  numberFormatter
} from "../src/index";

class Example extends React.Component {
  state = {
    selectValue: undefined,
    modalOpen: false
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
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "10", value: "10" },
            { label: "11", value: "11" },
            { label: "12", value: "12" },
            { label: "13", value: "13" },
            { label: "14", value: "14" },
            { label: "15", value: "15" },
            { label: "16", value: "16" },
            { label: "17", value: "17" }
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
      </React.Fragment>
    );
  }
}

export default Example;

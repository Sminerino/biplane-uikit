import React from 'react';
import {Button, Select, Checkbox, Tooltip, Modal, numberFormatter} from './src/index';

class Example extends React.Component {
  render() {
    return (
      <div>
        <div style={{width: 500, display: 'flex', flexDirection: 'column'}}>
        <Button>
          something something
        </Button>
        </div>
        <Select options={[{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},{label: '1', value: 1}, {label: '2', value: 2},]}/>
      </div>
    )
  }
}

export default Example;
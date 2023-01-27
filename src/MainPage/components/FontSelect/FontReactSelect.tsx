import React from 'react';
import Select from 'react-select';

import './style.css';

interface ReactSelect {
  selectedOption: any;
}

export class FontReactSelect extends React.PureComponent<{}, ReactSelect> {
  options: { value: string; label: string }[];
  constructor(props: {}) {
    super(props);
    this.options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    this.state = {
      selectedOption: this.options[0],
    };
  }

  render() {
    return (
      <div>
        <Select
          options={this.options}
          value={this.state.selectedOption}
          onChange={(selected) => this.setState({ selectedOption: selected })}
          className=".react-select__indicator-separator"
        />
      </div>
    );
  }
}

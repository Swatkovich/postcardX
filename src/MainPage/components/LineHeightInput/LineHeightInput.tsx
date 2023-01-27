import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LineHeightIcon } from '../../../assets/svg/line-height.svg';
import { ReactComponent as PercentageIcon } from '../../../assets/svg/percentage.svg';

import { InputProps, InputState } from '../../interface';

const StyledLineHeightInput = styled.input`
  background-color: #ffffff;
  height: 40px;
  width: calc(50% + 1px);
  border-radius: 4px 0 0 4px;
  border: 1px solid #e8ecf0;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 14.4px;
  font-weight: 400;
  font-family: Fira Sans;
  padding-left: 37px;
`;

class LineHeightInput extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('lineHeight') || (this.props.value as string),
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('lineHeight', event.target.value);
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <>
        <LineHeightIcon
          style={{
            position: 'relative',
            alignSelf: 'center',
            left: '11px',
            marginRight: '-16px',
          }}
        />
        <StyledLineHeightInput
          name="lineHeight"
          onChange={this.handleInputChange}
          value={this.state.value}
        />
        <PercentageIcon
          style={{
            position: 'relative',
            alignSelf: 'center',
            right: '12px',
            marginLeft: '-9px',
          }}
        />
      </>
    );
  }
}

export default LineHeightInput;

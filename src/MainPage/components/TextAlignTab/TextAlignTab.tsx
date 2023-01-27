import React from 'react';
import styled from 'styled-components';

import { TabProps, TabState, TextAlign } from '../../interface';

const StyledTextAlignTab = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 40px;
  border-collapse: collapse;
`;

const StyledTabElement = styled.div`
  height: 100%;
  width: 100%;
  border: 1px black solid;
  border-collapse: collapse;
  margin: 0px -1px 0px 01px;
  cursor: pointer;

  &.active {
    background-color: #66ff00;
  }

  &.unactive {
    background-color: #ff6600;
  }

  &:hover {
    background-color: #ff0066;
  }
`;

class TextAlignTab extends React.PureComponent<TabProps, TabState> {
  constructor(props: TabProps) {
    super(props);
    this.state = {
      value:
        (localStorage.getItem('textAlign') as TextAlign) ||
        (this.props.value as TextAlign),
    };
  }

  handleLeftChange = () => {
    this.setState({ value: 'left' });
    localStorage.setItem('textAlign', 'left');
  };

  handleCenterChange = () => {
    this.setState({ value: 'center' });
    localStorage.setItem('textAlign', 'center');
  };

  handleRightChange = () => {
    this.setState({ value: 'right' });
    localStorage.setItem('textAlign', 'right');
  };

  handleJustifyChange = () => {
    this.setState({ value: 'justify' });
    localStorage.setItem('textAlign', 'justify');
  };

  render() {
    return (
      <StyledTextAlignTab>
        <StyledTabElement
          id="left"
          className={`${this.state.value === 'left' ? 'active' : 'unactive'}`}
          onClick={this.handleLeftChange}
        >
          left
        </StyledTabElement>
        <StyledTabElement
          className={`${this.state.value === 'center' ? 'active' : 'unactive'}`}
          onClick={this.handleCenterChange}
        >
          center
        </StyledTabElement>
        <StyledTabElement
          className={`${this.state.value === 'right' ? 'active' : 'unactive'}`}
          onClick={this.handleRightChange}
        >
          right
        </StyledTabElement>
        <StyledTabElement
          className={`${
            this.state.value === 'justify' ? 'active' : 'unactive'
          }`}
          onClick={this.handleJustifyChange}
        >
          justify
        </StyledTabElement>
      </StyledTextAlignTab>
    );
  }
}

export default TextAlignTab;

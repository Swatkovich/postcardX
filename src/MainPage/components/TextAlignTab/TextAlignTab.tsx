import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LeftAlignIcon } from '../../../assets/svg/left-align.svg';
import { ReactComponent as CenterAlignIcon } from '../../../assets/svg/center-align.svg';
import { ReactComponent as RightAlignIcon } from '../../../assets/svg/right-align.svg';
import { ReactComponent as JustifyAlignIcon } from '../../../assets/svg/justify-align.svg';

import { TabProps, TabState, TextAlign } from '../../interface';

const StyledTextAlignTab = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;

  div:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  div:last-of-type {
    border-radius: 0 4px 4px 0;
    margin-right: 0px;
  }
`;

const StyledTabElement = styled.div`
  display: flex
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px #e8ecf0 solid;
  border-collapse: collapse;
  margin: 0px -1px 0px 0px;
  padding-top: 3px;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }

  &:active {
    background-color: #dddddd;
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
          // id="left"
          // className={`${this.state.value === 'left' ? 'active' : 'unactive'}`}
          onClick={this.handleLeftChange}
        >
          <LeftAlignIcon
            fill={this.state.value === 'left' ? '#2198ed' : '#aab2bb80'}
          />
        </StyledTabElement>
        <StyledTabElement
          // className={`${this.state.value === 'center' ? 'active' : 'unactive'}`}
          onClick={this.handleCenterChange}
        >
          <CenterAlignIcon
            fill={this.state.value === 'center' ? '#2198ed' : '#aab2bb80'}
          />
        </StyledTabElement>
        <StyledTabElement
          // className={`${this.state.value === 'right' ? 'active' : 'unactive'}`}
          onClick={this.handleRightChange}
        >
          <RightAlignIcon
            fill={this.state.value === 'right' ? '#2198ed' : '#aab2bb80'}
          />
        </StyledTabElement>
        <StyledTabElement
          // className={`${
          //   this.state.value === 'justify' ? 'active' : 'unactive'
          // }`}
          onClick={this.handleJustifyChange}
        >
          <JustifyAlignIcon
            fill={this.state.value === 'justify' ? '#2198ed' : '#aab2bb80'}
          />
        </StyledTabElement>
      </StyledTextAlignTab>
    );
  }
}

export default TextAlignTab;

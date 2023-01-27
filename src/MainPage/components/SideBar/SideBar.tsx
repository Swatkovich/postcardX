import React from 'react';
import styled from 'styled-components';

import ColorSelect from '../ColorSelect';
import FontSelect from '../FontSelect';
// import { FontReactSelect } from '../FontSelect/FontReactSelect';
import FontSizeInput from '../FontSizeInput';
import FontWeightSelect from '../FontWeightSelect';
import LineHeightInput from '../LineHeightInput';
import LetterSpacingInput from '../LetterSpacingInput';
import TextAlignTab from '../TextAlignTab';
import SubmitButton from '../SubmitButton';
import { SideBarProps, SideBarState } from '../../interface';

const StyledSideBar = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;

  & .header {
    width: 100%;
    line-height: 12px;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: #788994;
    padding: 3px 0 0 1px;
    margin-bottom: 10px;
  }

  & .weight-size_container {
    display: flex;
    flex-flow: row;
    margin-bottom: 10px;
  }

  & .height-spacing_container {
    display: flex;
    flex-flow: row;
    margin-bottom: 10px;
  }
`;

class SideBar extends React.PureComponent<SideBarProps, SideBarState> {
  handleSave = () => {
    localStorage.setItem('font', this.props.font);
    localStorage.setItem('fontSize', this.props.fontSize.toString());
    localStorage.setItem('fontWeight', this.props.fontWeight);
    localStorage.setItem('color', this.props.color);
    localStorage.setItem('lineHeight', this.props.lineHeight.toString());
    localStorage.setItem('letterSpacing', this.props.letterSpacing.toString());
    localStorage.setItem('textAlign', this.props.textAlign);
  };

  render() {
    return (
      <StyledSideBar>
        <div className="header">TEXT</div>
        <FontSelect value={this.props.font} />
        {/* <FontReactSelect /> */}
        <div className="weight-size_container">
          <FontWeightSelect value={this.props.fontWeight} />
          <FontSizeInput value={this.props.fontSize} />
        </div>
        <ColorSelect value={this.props.color} />
        <div className="height-spacing_container">
          <LineHeightInput value={this.props.lineHeight} />
          <LetterSpacingInput value={this.props.letterSpacing} />
        </div>
        <TextAlignTab value={this.props.textAlign} />
        <SubmitButton handleApply={this.props.handleApply} />
      </StyledSideBar>
    );
  }
}

export default SideBar;

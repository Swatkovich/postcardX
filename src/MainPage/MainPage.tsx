import React from 'react';
import styled from 'styled-components';

import ListPanel from './components/ListPanel';
import SideBar from './components/SideBar';
import { TextAlign, TextState } from './interface';

const StyledMainPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class MainPage extends React.PureComponent<{}, TextState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      text: 'Type Here...',
      font: 'Fira Sans',
      fontSize: '14px',
      fontWeight: 'Bold',
      color: '#292929',
      lineHeight: '125%',
      letterSpacing: '0.6px',
      textAlign: 'left',
    };
  }

  componentDidMount() {
    const localStorageObject = Object.assign({}, localStorage);
    if (localStorageObject.text) {
      this.setState({ text: localStorageObject.text });
    } else {
      localStorage.setItem('text', this.state.text);
    }
    if (localStorageObject.font) {
      this.setState({ font: localStorageObject.font });
    } else {
      localStorage.setItem('font', this.state.font);
    }
    if (localStorageObject.fontSize) {
      this.setState({ fontSize: localStorageObject.fontSize });
    } else {
      localStorage.setItem('fontSize', this.state.fontSize);
    }
    if (localStorageObject.fontWeight) {
      this.setState({ fontWeight: localStorageObject.fontWeight });
    } else {
      localStorage.setItem('fontWeight', this.state.fontWeight);
    }
    if (localStorageObject.color) {
      this.setState({ color: localStorageObject.color });
    } else {
      localStorage.setItem('color', this.state.color);
    }
    if (localStorageObject.lineHeight) {
      this.setState({ lineHeight: localStorageObject.lineHeight });
    } else {
      localStorage.setItem('lineHeight', this.state.lineHeight);
    }
    if (localStorageObject.letterSpacing) {
      this.setState({ letterSpacing: localStorageObject.letterSpacing });
    } else {
      localStorage.setItem('letterSpacing', this.state.letterSpacing);
    }
    if (localStorageObject.textAlign) {
      this.setState({ textAlign: localStorageObject.textAlign });
    } else {
      localStorage.setItem('textAlign', this.state.textAlign);
    }
  }

  handleApply = () => {
    this.setState({ font: localStorage.getItem('font') as string });
    this.setState({ fontSize: localStorage.getItem('fontSize') as string });
    this.setState({ fontWeight: localStorage.getItem('fontWeight') as string });
    this.setState({ color: localStorage.getItem('color') as string });
    this.setState({ lineHeight: localStorage.getItem('lineHeight') as string });
    this.setState({
      letterSpacing: localStorage.getItem('letterSpacing') as string,
    });
    this.setState({
      textAlign: localStorage.getItem('textAlign') as TextAlign,
    });
  };

  render() {
    return (
      <StyledMainPage>
        <ListPanel
          text={this.state.text}
          font={this.state.font}
          fontWeight={this.state.fontWeight}
          fontSize={this.state.fontSize}
          color={this.state.color}
          lineHeight={this.state.lineHeight}
          letterSpacing={this.state.letterSpacing}
          textAlign={this.state.textAlign}
        />
        <SideBar
          font={this.state.font}
          fontWeight={this.state.fontWeight}
          fontSize={this.state.fontSize}
          color={this.state.color}
          lineHeight={this.state.lineHeight}
          letterSpacing={this.state.letterSpacing}
          textAlign={this.state.textAlign}
          handleApply={this.handleApply}
        />
      </StyledMainPage>
    );
  }
}

export default MainPage;

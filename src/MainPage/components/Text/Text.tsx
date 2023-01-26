import './style.css';

import React from 'react';

import { TextProps, TextState } from '../../interface';

class Text extends React.PureComponent<TextProps, TextState> {
  constructor(props: TextProps) {
    super(props);
    this.state = {
      text: this.props.text,
      font: this.props.font,
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight,
      color: this.props.color,
      lineHeight: this.props.lineHeight,
      letterSpacing: this.props.letterSpacing,
      textAlign: this.props.textAlign,
    };
  }
  componentDidMount() {
    const localStorageObject = Object.assign({}, localStorage);
    if (localStorageObject.text) {
      this.setState({ text: localStorageObject.text });
    }
    if (localStorageObject.font) {
      this.setState({ font: localStorageObject.font });
    }
    if (localStorageObject.fontSize) {
      this.setState({ fontSize: localStorageObject.fontSize });
    }
    if (localStorageObject.fontWeight) {
      this.setState({ fontWeight: localStorageObject.fontWeight });
    }
    if (localStorageObject.color) {
      this.setState({ color: localStorageObject.color });
    }
    if (localStorageObject.lineHeight) {
      this.setState({ lineHeight: localStorageObject.lineHeight });
    }
    if (localStorageObject.letterSpacing) {
      this.setState({ letterSpacing: localStorageObject.letterSpacing });
    }
    if (localStorageObject.textAlign) {
      this.setState({ textAlign: localStorageObject.textAlign });
    }
  }

  handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: event.target.value });
    localStorage.setItem('text', event.target.value);
  };

  render() {
    return (
      <textarea
        style={{
          fontFamily: this.props.font,
          fontSize: this.props.fontSize,
          fontWeight: this.props.fontWeight,
          color: this.props.color,
          lineHeight: this.props.lineHeight,
          letterSpacing: this.props.letterSpacing,
          textAlign: this.props.textAlign,

          // fontFamily: this.state.font,
          // fontSize: this.state.fontSize,
          // fontWeight: this.state.fontWeight,
          // color: this.state.color,
          // lineHeight: this.state.lineHeight,
          // letterSpacing: this.state.letterSpacing,
          // textAlign: this.state.textAlign,
        }}
        spellCheck="false"
        className="text"
        onChange={this.handleTextChange}
        value={this.props.text}
        // value={this.state.text}
      ></textarea>
    );
  }
}

export default Text;

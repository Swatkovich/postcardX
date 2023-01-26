import React from 'react';

export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent';

export interface TextState {
  text: string;
  font: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  lineHeight: string;
  letterSpacing: string;
  textAlign: TextAlign;
}

export interface TextProps extends TextState {}

export interface InputProps {
  value: string;
}

export interface InputState {
  value: string;
}

export interface SubmitProps {
  handleApply: () => void;
}

export interface SideBarState {
  font: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  lineHeight: string;
  letterSpacing: string;
  textAlign: TextAlign;
}

export interface SideBarProps extends SideBarState {
  handleChange: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleTabChange: (value: TextAlign) => void;
  handleApply: () => void;
}

export interface TabProps {
  // handleTabChange: (value: TextAlign) => void;
  value: TextAlign;
}

export interface TabState {
  value: TextAlign;
}

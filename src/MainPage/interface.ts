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

export interface InputState extends InputProps {}

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
  handleApply: () => void;
}

export interface TabProps {
  value: TextAlign;
}

export interface TabState extends TabProps {}

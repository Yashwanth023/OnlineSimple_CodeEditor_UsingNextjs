export type Language = {
  name: string;
  value: string;
  icon: string;
}

export type EditorTheme = 'light' | 'dark';

export interface EditorState {
  language: string;
  code: string;
  output: string;
}


"use client"

import { useCallback, useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { cpp } from '@codemirror/lang-cpp'
import { php } from '@codemirror/lang-php'
import { rust } from '@codemirror/lang-rust'
import { sql } from '@codemirror/lang-sql'
import { html } from '@codemirror/lang-html'
import { java } from '@codemirror/lang-java'
import { languages } from '@/config/languages'
import { EditorView } from '@codemirror/view'
import { tags as t } from '@lezer/highlight'
import { createTheme } from '@uiw/codemirror-themes'

const darkTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#1e1e1e',
    foreground: '#9cdcfe',
    caret: '#c6c6c6',
    selection: '#6199ff2f',
    selectionMatch: '#72a1ff59',
    lineHighlight: '#ffffff0f',
  },
  styles: [
    { tag: t.comment, color: '#6a9955' },
    { tag: t.variableName, color: '#9cdcfe' },
    { tag: t.string, color: '#ce9178' },
    { tag: t.number, color: '#b5cea8' },
    { tag: t.keyword, color: '#569cd6' },
    { tag: t.operator, color: '#d4d4d4' },
    { tag: t.bracket, color: '#d4d4d4' },
    { tag: t.definition(t.typeName), color: '#4ec9b0' },
    { tag: t.className, color: '#4ec9b0' },
    { tag: t.propertyName, color: '#9cdcfe' },
    { tag: t.function(t.variableName), color: '#dcdcaa' },
  ],
})

interface CodeEditorProps {
  language: string
  code: string
  onChange: (value: string) => void
}

export function CodeEditor({ language, code, onChange }: CodeEditorProps) {
  const getLanguageExtension = useCallback(() => {
    switch (language) {
      case 'javascript':
        return javascript()
      case 'python':
        return python()
      case 'cpp':
        return cpp()
      case 'php':
        return php()
      case 'rust':
        return rust()
      case 'sql':
        return sql()
      case 'html':
        return html()
      case 'java':
        return java()
      default:
        return javascript()
    }
  }, [language])

  useEffect(() => {
    const currentLang = languages.find(l => l.value === language)
    if (currentLang && !code) {
      onChange(currentLang.defaultCode)
    }
  }, [language, code, onChange])

  return (
    <CodeMirror
      value={code}
      height="100%"
      theme={darkTheme}
      extensions={[
        getLanguageExtension(),
        EditorView.lineWrapping,
        EditorView.theme({
          "&": { fontSize: "14px" }
        })
      ]}
      onChange={onChange}
      className="h-full"
    />
  )
}


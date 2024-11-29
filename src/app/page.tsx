"use client"

import { useState, useCallback } from "react"
import { CodeEditor } from "@/components/code-editor"
import { OutputPanel } from "@/components/output-panel"
import { LanguageSidebar } from "@/components/language-sidebar"
import { Button } from "@/components/ui/button"
import { languages } from "@/config/languages"
import { Play, X } from 'lucide-react'
import { simulateExecution } from "@/lib/simulate-execution"

export default function Home() {
  const [language, setLanguage] = useState("python")
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRun = useCallback(async () => {
    if (!code.trim()) return
    
    setIsLoading(true)
    try {
      const result = await simulateExecution({ language, code })
      setOutput(result)
    } catch (error) {
      setOutput("Error executing code")
    } finally {
      setIsLoading(false)
    }
  }, [code, language])

  const handleClear = useCallback(() => {
    setOutput("")
  }, [])

  const currentLang = languages.find(l => l.value === language)

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-white">
      <LanguageSidebar
        selectedLanguage={language}
        onSelectLanguage={setLanguage}
      />
      
      <div className="flex-1 flex flex-col">
        <div className="h-12 border-b border-[#333] flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {currentLang?.extension ? `main.${currentLang.extension}` : 'main.txt'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRun}
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
            >
              <Play className="w-4 h-4 mr-2" />
              {isLoading ? 'Running...' : 'Run'}
            </Button>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 divide-x divide-[#333]">
          <CodeEditor
            language={language}
            code={code}
            onChange={setCode}
          />
          <div className="flex flex-col">
            <div className="h-12 border-b border-[#333] flex items-center justify-between px-4">
              <span className="text-sm">Output</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                disabled={isLoading}
              >
                <X className="w-4 h-4" />
                <span className="ml-2">Clear</span>
              </Button>
            </div>
            <div className="flex-1 overflow-auto">
              <OutputPanel 
                output={output}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


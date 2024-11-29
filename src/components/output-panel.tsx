interface OutputPanelProps {
  output: string
  isLoading?: boolean
}

export function OutputPanel({ output, isLoading }: OutputPanelProps) {
  return (
    <div className="h-full bg-[#1e1e1e] text-white p-4 font-mono text-sm overflow-auto">
      {isLoading ? (
        <div className="text-gray-400">Running code...</div>
      ) : output ? (
        <>
          <div className="whitespace-pre-wrap">{output}</div>
          <div className="text-green-400 mt-2">{'=== Code Execution Successful ==='}</div>
        </>
      ) : (
        <div className="text-gray-400">Output will appear here...</div>
      )}
    </div>
  )
}


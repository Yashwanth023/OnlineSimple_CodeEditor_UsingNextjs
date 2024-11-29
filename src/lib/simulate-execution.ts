interface SimulateExecutionProps {
  language: string
  code: string
}

export function simulateExecution({ language, code }: SimulateExecutionProps) {
  // Simulate processing delay
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      // Simple simulation based on language
      switch (language) {
        case 'python':
          // Extract print statements
          const pythonOutput = code.match(/print$$(.*?)$$/g)?.map(match => {
            try {
              return eval(match.slice(6, -1))
            } catch {
              return match.slice(6, -1).replace(/['"]/g, '')
            }
          }).join('\n')
          resolve(pythonOutput || 'No output')
          break
          
        case 'javascript':
          // Extract console.log statements
          const jsOutput = code.match(/console\.log$$(.*?)$$/g)?.map(match => {
            try {
              return eval(match.slice(12, -1))
            } catch {
              return match.slice(12, -1).replace(/['"]/g, '')
            }
          }).join('\n')
          resolve(jsOutput || 'No output')
          break
          
        default:
          // For other languages, just show the first non-comment line
          const firstLine = code.split('\n').find(line => 
            !line.trim().startsWith('//') && 
            !line.trim().startsWith('#') && 
            line.trim()
          )
          resolve(firstLine ? `Simulated output: ${firstLine}` : 'No output')
      }
    }, 500) // Add a small delay to simulate processing
  })
}


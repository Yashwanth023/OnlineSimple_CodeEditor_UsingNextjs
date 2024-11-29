interface ExecuteCodeProps {
  language: string
  code: string
}

interface ExecuteCodeResponse {
  stdout: string
  stderr: string
  compile_output: string
  message: string
  time: string
  memory: string
  status: {
    id: number
    description: string
  }
}

const JUDGE0_API_URL = "https://judge0-ce.p.rapidapi.com"

const languageIds: Record<string, number> = {
  "python": 71,
  "javascript": 63,
  "cpp": 54,
  "java": 62,
  "go": 60,
  "php": 68,
  "swift": 83,
  "rust": 73,
}

export async function executeCode({ language, code }: ExecuteCodeProps) {
  try {
    // Create submission
    const response = await fetch(`${JUDGE0_API_URL}/submissions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      body: JSON.stringify({
        language_id: languageIds[language],
        source_code: btoa(code),
        stdin: ''
      })
    });

    const { token } = await response.json();

    // Get submission result
    const result = await fetch(`${JUDGE0_API_URL}/submissions/${token}`, {
      headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    });

    const data: ExecuteCodeResponse = await result.json();

    // Handle different outputs
    const output = data.stdout || data.stderr || data.compile_output || data.message;
    
    return {
      success: data.status.id === 3,
      output: output || 'No output',
      executionTime: data.time,
      memory: data.memory,
      status: data.status.description
    };
  } catch (error) {
    return {
      success: false,
      output: 'Error executing code. Please try again.',
      executionTime: null,
      memory: null,
      status: 'Error'
    };
  }
}


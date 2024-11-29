import { Language } from "@/types/editor"
import { BracesIcon, DatabaseIcon, FileCodeIcon, CoffeeIcon, BoxIcon, GlobeIcon, FileJsonIcon, AppleIcon as SwiftIcon, CogIcon } from 'lucide-react'

export const languages: Language[] = [
  {
    name: "Python",
    value: "python",
    icon: BracesIcon,
    extension: "py",
    defaultCode: "# Write Python code here\nprint('Hello World')"
  },
  {
    name: "SQL",
    value: "sql",
    icon: DatabaseIcon,
    extension: "sql",
    defaultCode: "-- Write SQL queries here\nSELECT * FROM users;"
  },
  {
    name: "HTML",
    value: "html",
    icon: FileCodeIcon,
    extension: "html",
    defaultCode: "<!-- Write HTML here -->\n<h1>Hello World</h1>"
  },
  {
    name: "Java",
    value: "java",
    icon: CoffeeIcon,
    extension: "java",
    defaultCode: "// Write Java code here\nclass Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World\");\n  }\n}"
  },
  {
    name: "C++",
    value: "cpp",
    icon: BoxIcon,
    extension: "cpp",
    defaultCode: "// Write C++ code here\n#include <iostream>\n\nint main() {\n    std::cout << \"Hello World\";\n    return 0;\n}"
  },
  {
    name: "Go",
    value: "go",
    icon: GlobeIcon,
    extension: "go",
    defaultCode: "// Write Go code here\npackage main\n\nfunc main() {\n    println(\"Hello World\")\n}"
  },
  {
    name: "PHP",
    value: "php",
    icon: FileJsonIcon,
    extension: "php",
    defaultCode: "<?php\n// Write PHP code here\necho \"Hello World\";\n?>"
  },
  {
    name: "Swift",
    value: "swift",
    icon: SwiftIcon,
    extension: "swift",
    defaultCode: "// Write Swift code here\nprint(\"Hello World\")"
  },
  {
    name: "Rust",
    value: "rust",
    icon: CogIcon,
    extension: "rs",
    defaultCode: "// Write Rust code here\nfn main() {\n    println!(\"Hello World\");\n}"
  }
]


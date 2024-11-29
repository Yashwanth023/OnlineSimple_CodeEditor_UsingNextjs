import { Button } from "@/components/ui/button"
import { languages } from "@/config/languages"
import { cn } from "@/lib/utils"

interface LanguageSidebarProps {
  selectedLanguage: string
  onSelectLanguage: (language: string) => void
}

export function LanguageSidebar({ selectedLanguage, onSelectLanguage }: LanguageSidebarProps) {
  return (
    <div className="w-16 bg-[#1e1e1e] border-r border-[#333] flex flex-col items-center py-2 gap-2">
      {languages.map((lang) => {
        const Icon = lang.icon
        return (
          <Button
            key={lang.value}
            variant="ghost"
            size="icon"
            className={cn(
              "w-12 h-12 rounded-lg",
              selectedLanguage === lang.value && "bg-blue-500/20 text-blue-500"
            )}
            onClick={() => onSelectLanguage(lang.value)}
          >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{lang.name}</span>
          </Button>
        )
      })}
    </div>
  )
}


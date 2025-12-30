import React, { useState } from 'react';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { languages } from '../lib/translations';

export function LanguageSelector({ 
  currentLanguage = 'en', 
  onLanguageChange,
  variant = 'ghost',
  size = 'default'
}) {
  const currentLang = languages.find(l => l.code === currentLanguage);
  const [open, setOpen] = useState(false); // control dropdown open state

  const handleChange = (langCode) => {
    if (onLanguageChange) onLanguageChange(langCode);
    setOpen(false); // close dropdown immediately
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLang?.flag} {currentLang?.name}</span>
          <span className="sm:hidden">{currentLang?.flag}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 max-h-60 overflow-y-auto"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onSelect={() => handleChange(lang.code)}
            className={`flex items-center gap-2 ${
              currentLanguage === lang.code
                ? 'bg-blue-600 text-white font-semibold'
                : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

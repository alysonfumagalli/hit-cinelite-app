import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

interface SearchBarProps {
  onSearch: (value: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  const handleClear = () => {
    setValue('')
    onSearch('')
  }

  return (
    <div className="w-full relative max-w-xs md:max-w-md lg:max-w-2xl">
      <MagnifyingGlassIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-paragraph" />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="rounded-md bg-background-secondary border border-border h-8 md:h-9 text-light text-sm md:text-base w-full text-title font-light placeholder:text-paragraph px-3 py-2 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent "
        placeholder="Buscar pelo nome do filme..."
      ></input>
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-paragraph hover:text-title transition-colors"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}

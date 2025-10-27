import { FilmIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-background-secondary p-4 shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
          <FilmIcon className="h-7 w-7 text-title " />
        </div>
        <h1 className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent">
          CineLite
        </h1>
      </Link>
    </header>
  )
}

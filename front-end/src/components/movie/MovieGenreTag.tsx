import type { MovieGenre } from '../../types/movie'

interface MovieGenreTagProps {
  genre: MovieGenre
}

export function MovieGenreTag({ genre }: MovieGenreTagProps) {
  return (
    <>
      <span className="text-paragraph text-xs md:text-sm lg:text-base bg-background-secondary border border-border rounded-lg p-2">
        {genre.name}
      </span>
    </>
  )
}

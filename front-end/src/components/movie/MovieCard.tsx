import { FaceFrownIcon, StarIcon } from '@heroicons/react/16/solid'
import type { MovieDetails, MovieSummary } from '../../types/movie'
import { useNavigate } from 'react-router-dom'

interface MovieCardProps {
  movie?: MovieSummary | MovieDetails
  showTitle?: boolean
  showRuntime?: boolean
  maxWidth?: string
}

export function MovieCard({
  movie,
  showTitle = false,
  showRuntime = false,
  maxWidth,
}: MovieCardProps) {
  const navigate = useNavigate()
  const releaseYear = movie?.release_date?.split('-')[0] ?? '—'

  return (
    <article
      className={`text-paragraph flex flex-col items-center mt-4 w-full hover:scale-105 transition-transform hover:cursor-pointer ${maxWidth ?? 'max-w-40'}`}
      onClick={() => navigate(`/movie/${movie?.id}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          navigate(`/movie/${movie?.id}`)
        }
      }}
      tabIndex={0}
    >
      {movie?.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={`Pôster do filme ${movie.title}`}
          className="rounded-lg border border-paragraph h-full w-full"
        />
      ) : (
        <div className="bg-paragraph rounded-lg h-full flex flex-col items-center justify-center text-center p-2 gap-5">
          <FaceFrownIcon className="size-16 text-background-secondary" />
          <p className="text-background-secondary text-xs">
            Ops...Parece que este filme não tem um pôster.
          </p>
        </div>
      )}
      <div className="w-40">
        {showTitle && (
          <h4 className="mt-2 text-sm font-semibold text-paragraph truncate">
            {movie?.title}
          </h4>
        )}
        <p
          className="text-[11px] flex justify-between mt-1"
          aria-label="Informações do filme"
        >
          <span>{releaseYear}</span>
          {showRuntime && 'runtime' in movie! && (
            <span>{movie.runtime} min</span>
          )}
          <span
            className="flex items-center"
            aria-label={`Avaliação ${movie?.vote_average.toFixed(1)} de 5`}
          >
            <StarIcon className="inline h-3 w-3 text-star" aria-hidden="true" />
            <span className="ml-1">{movie?.vote_average.toFixed(1)}</span>
          </span>
        </p>
      </div>
    </article>
  )
}

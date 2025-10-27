import { MovieGenreTag } from '../../../components/movie/MovieGenreTag'
import type { MovieDetails } from '../../../types/movie'
import { MovieInfo } from './MovieInfo'

interface MovieInfoProps {
  movie: MovieDetails | undefined
}

export function MovieInfoSection({ movie }: MovieInfoProps) {
  return (
    <div className="flex flex-col gap-6 mt-5">
      <MovieInfo
        title="Gêneros"
        content={
          <div className="flex flex-wrap gap-2">
            {movie?.genres.map((genre) => (
              <MovieGenreTag key={genre.id} genre={genre} />
            ))}
          </div>
        }
      />
      <MovieInfo title="Sinopse" content={movie?.overview} />
      <MovieInfo
        title="Site Oficial"
        content={
          movie?.homepage === '' ? (
            <p>Não disponível.</p>
          ) : (
            <a
              href={movie?.homepage}
              target="_blank"
              className="break-words hover:underline"
              rel="noreferrer"
            >
              {movie?.homepage}
            </a>
          )
        }
      />
    </div>
  )
}

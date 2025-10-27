import { useParams } from 'react-router-dom'
import { MovieCard } from '../../components/movie/MovieCard'
import { GoBackButton } from '../../components/ui/GoBackButton'
import { useGetMovieByIdQuery } from '../../api/tmdb-api'
import { MovieInfoSection } from './components/MovieInfoSection'

export function MovieDetailsPage() {
  const { id } = useParams()
  const { data, isFetching, error } = useGetMovieByIdQuery({
    movieId: Number(id),
  })
  const movie = data

  if (isFetching) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar detalhes do filme.</p>

  return (
    <>
      <article className="w-full max-w-3xl mx-auto p-4 text-title relative animate-fade-in-up">
        <section className="absolute top-4 left-4">
          <GoBackButton />
        </section>
        <section className="mt-12 flex flex-col items-center">
          <h2 className="text-title font-bold text-center text-xl md:text-2xl lg:text-3xl">
            {movie?.title}
          </h2>
          <MovieCard movie={movie} showRuntime={true} maxWidth="max-w-48" />
        </section>
        <MovieInfoSection movie={movie} />
      </article>
    </>
  )
}

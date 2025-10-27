import { useEffect } from 'react'
import { useGetPopularMoviesQuery } from '../../api/tmdb-api'
import { MovieCard } from './MovieCard'
import type { MovieSummary } from '../../types/movie'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'

interface MovieListProps {
  searchTerm: string
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export function MovieList({ searchTerm, page, setPage }: MovieListProps) {
  const { data, isFetching, error } = useGetPopularMoviesQuery({
    page,
    query: searchTerm,
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  if (error) return <p>Erro ao carregar filmes.</p>
  if (isFetching) return <p>Carregando...</p>

  const totalPages = Math.min(data?.total_pages || 1, 500)

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxPagesToShow = 5
    const sidePages = 1 // número de páginas ao redor da atual

    if (totalPages <= maxPagesToShow) {
      // exibe todas as páginas se forem poucas
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      // sempre mostra a primeira página
      pages.push(1)

      // coloca "..." se a página atual estiver longe do início
      if (page > sidePages + 2) pages.push('...')

      // páginas ao redor da atual
      const startPage = Math.max(2, page - sidePages)
      const endPage = Math.min(totalPages - 1, page + sidePages)
      for (let i = startPage; i <= endPage; i++) pages.push(i)

      // coloca "..." se a página atual estiver longe do fim
      if (page < totalPages - sidePages - 1) pages.push('...')

      // sempre mostra a última página
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fade-in-up">
        {data?.results?.map((movie: MovieSummary) => (
          <MovieCard key={movie.id} movie={movie} showTitle={true} />
        ))}
      </div>

      <div className="flex gap-2 mt-6 items-center">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <ChevronLeftIcon
            className={`size-8 ${page === 1 ? 'fill-border' : 'fill-paragraph'}`}
          />
        </button>
        {getPageNumbers().map((p, index) =>
          p === '...' ? (
            <span key={index} className="px-3 py-1 text-paragraph">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setPage(Number(p))}
              className={`px-3 py-1 rounded ${
                p === page
                  ? 'bg-background-secondary border border-paragraph text-title font-medium'
                  : 'bg-background-secondary text-paragraph border border-border'
              }`}
            >
              {p}
            </button>
          ),
        )}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <ChevronRightIcon
            className={`size-8 ${page === totalPages ? 'fill-border' : 'fill-paragraph'}`}
          />
        </button>
      </div>
    </div>
  )
}

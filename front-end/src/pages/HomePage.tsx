import { useState } from 'react'
import { MovieList } from '../components/movie/MovieList'
import { SearchBar } from '../components/SearchBar'
import debounce from '../utils/debounce'

export function HomePage() {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = debounce((value: string) => {
    setSearchTerm(value)
    setPage(1)
  }, 500)

  return (
    <>
      <section className="animate-fade-in-up w-full flex flex-col items-center mt-6">
        <div className="text-center mb-8">
          <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent text-center mb-2 text-3xl md:text-5xl lg:text-6xl">
            Descubra Filmes Incríveis
          </h2>
          <p className="text-paragraph font-normal text-sm md:text-lg lg:text-xl">
            Explore milhares de filmes e encontre seu próximo favorito
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="mt-9 mb-6 px-4 w-full flex flex-col items-center animate-fade-in-up">
        <h3 className="font-semibold text-title text-xl md:text-3xl lg:text-4xl">
          Lista de Filmes
        </h3>
        <MovieList page={page} searchTerm={searchTerm} setPage={setPage} />
      </section>
    </>
  )
}

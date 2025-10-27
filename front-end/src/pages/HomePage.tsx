import { SearchBar } from '../components/SearchBar'

export function HomePage() {
  return (
    <>
      <section className="animate-fade-in-up w-full flex flex-col items-center mt-6">
        <div className="text-center mb-8">
          <h2 className="bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-3xl text-transparent text-center mb-2">
            Descubra Filmes Incríveis
          </h2>
          <p className="text-paragraph font-normal text-sm">
            Explore milhares de filmes e encontre seu próximo favorito
          </p>
        </div>
        <SearchBar />
      </section>

      <section className="mt-9 mb-6 px-4 w-full">
        <h3 className="text-xl font-semibold text-title">Filmes Populares</h3>
      </section>
    </>
  )
}

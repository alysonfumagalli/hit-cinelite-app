export interface PaginatedResponse<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export interface MovieSummary {
  id: number
  title: string
  poster_path: string | undefined
  vote_average: number
  release_date: string
}

export interface MovieGenre {
  id: number
  name: string
}
export interface MovieDetails extends MovieSummary {
  overview: string
  genres: MovieGenre[]
  homepage: string
  runtime: number
  tagline: string
}

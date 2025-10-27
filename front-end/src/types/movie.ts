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

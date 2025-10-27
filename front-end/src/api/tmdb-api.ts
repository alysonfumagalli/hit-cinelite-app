import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  MovieDetails,
  MovieSummary,
  PaginatedResponse,
} from '../types/movie'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const tmdbAPI = createApi({
  reducerPath: 'tmdbAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<
      PaginatedResponse<MovieSummary>,
      { page?: number; query?: string }
    >({
      query: ({ page = 1, query = '' }) => ({
        method: 'GET',
        url: query
          ? `/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(
              query,
            )}&page=${page}&sort_by=vote_average.desc`
          : `/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`,
      }),
    }),
    getMovieById: builder.query<MovieDetails, { movieId: number }>({
      query: ({ movieId }) => ({
        method: 'GET',
        url: `/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`,
      }),
    }),
  }),
})

export const { useGetPopularMoviesQuery, useGetMovieByIdQuery } = tmdbAPI

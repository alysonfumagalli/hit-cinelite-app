import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../layouts/Layout'
import { HomePage } from '../pages/HomePage'
import { MovieDetailsPage } from '../pages/MovieDetailsPage'

export function CineLiteRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route
            path="*"
            element={<p className="text-title">Page Not Found</p>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

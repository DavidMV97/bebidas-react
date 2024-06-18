import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={
            <Suspense fallback="Loading..." >
              <IndexPage />
            </Suspense>
          } />
          <Route path="/favoritos" element={
            <Suspense fallback="Loading..." >
              <FavoritesPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

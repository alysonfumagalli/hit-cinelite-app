import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function Layout() {
  return (
    <>
      <Header />
      <main className="bg-background-primary min-h-screen flex flex-col items-center w-full">
        {<Outlet />}
      </main>
    </>
  )
}

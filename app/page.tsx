'use client'
import Dashboard from '../components/Main/Dashboard'
import useStore from '../store/global'

/**
 * Renders the Home component.
 *
 * @return {React.JSX.Element} The main component of the Home page.
 */
export default function Home(): React.JSX.Element {
  const { userData } = useStore()
  return (
    <main className="flex min-h-screen flex-col items-start">
      <Dashboard userData={userData} />
    </main>
  )
}

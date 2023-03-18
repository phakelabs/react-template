import { useRoutes } from 'react-router-dom'

import routes from './routes'

function App() {
  const rootRoutes = useRoutes(routes)

  return (
    <>
      <main>
        {rootRoutes}
      </main>
    </>
  )
}

export default App

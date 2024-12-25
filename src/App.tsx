// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Auth } from './components/Auth'
import { CollectionList } from './components/CollectionList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
    <h1 className="text-4xl font-bold text-center">Bookmark Manager</h1>
    <Auth />


    <span className="text-center block mt-4">
      Built with{' '}
      <img src="/react.svg" alt="React Logo" className="h-4 inline" /> and{' '}
      <img src="/vite.svg" alt="Vite Logo" className="h-4 inline" />
    </span>

<CollectionList onSelect={(collection) => console.log(collection)} />
    </div>
  )
}

export default App

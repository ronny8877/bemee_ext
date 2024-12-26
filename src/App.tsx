// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Auth } from './components/Auth'
import QrCode from './components/QrCode'
import './index.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='max-w-2xl mx-auto p-4'>
    <h1 className="text-4xl font-bold text-center">Bookmark Manager</h1>
    <Auth />


    <span className="text-center block mt-4">
      Built with{' '}
      <img src="/react.svg" alt="React Logo" className="h-4 inline" /> and{' '}
      <img src="/vite.svg" alt="Vite Logo" className="h-4 inline" />
    </span>

{/* <CollectionList onSelect={(collection) => console.log(collection)} /> */}

    <QrCode
      url="https://bemee.dev"
      message="Scan me to visit bemee.dev"
      download={true}
    />

    </div>
  )
}

export default App

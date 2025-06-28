import { Routes, Route } from 'react-router-dom'

import Counter from '@/pages/Counter'
import FetchData from '@/pages/FetchData'
import Form from '@/pages/Form'
import Home from '@/pages/Home'
import Layout from '@/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/query" element={<FetchData />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  )
}

export default App

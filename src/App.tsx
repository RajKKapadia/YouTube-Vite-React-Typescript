import { Routes, Route } from 'react-router-dom'

import CounterPage from '@/pages/CounterPage'
import FetchDataPage from '@/pages/FetchDataPage'
import FormPage from '@/pages/FormPage'
import HomePage from '@/pages/HomePage'
import Layout from '@/Layout'
import ReduxPage from "@/pages/ReduxPage"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path='/redux' element={<ReduxPage />}></Route>
        <Route path="/query" element={<FetchDataPage />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
    </Routes>
  )
}

export default App

import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import TrashCash from './pages/TrashCash'
import CommunityPage from './pages/Community'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trashcash" element={<TrashCash />} />
      <Route path="/komunitas" element={<CommunityPage />} />
    </Routes>
  )
}

export default App

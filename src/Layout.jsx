import React from 'react'
import App from './App'
import { Routes, Route } from 'react-router-dom'
import FigmaDesigns from './Pages/Design-Showcase/FigmaDesigns'
import Landing from './Pages/Landing/Landing'
import TestPage from './Pages/_test-redesign/TestPage'

export default function Layout() {
  return (
    <App>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/figma-designs" element={<FigmaDesigns />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </App>
  )
}
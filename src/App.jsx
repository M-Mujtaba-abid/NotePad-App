import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Paste from './component/Paste'
import ViewPaste from './component/ViewPaste'
import { Route, Routes } from 'react-router-dom'
import Edit from './component/Edit'


const App = () => {
  return (
    <div>

      <Navbar path="/" element={<Navbar/>} />
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/paste"  element={<Paste/>} />
      <Route path="/paste/:id" element={<ViewPaste/>} />
      <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App

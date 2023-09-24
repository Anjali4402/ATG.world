import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import MainImage from './component/MainImage'
import WebsiteContent from './component/WebsiteContent'
import ModalDialog from './component/ModalDialog'

function App() {
  return (
    <>
      <Navbar/>
      <MainImage/>
      <WebsiteContent/>
      <ModalDialog/>
    </>
  )
}

export default App

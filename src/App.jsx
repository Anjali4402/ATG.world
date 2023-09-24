import './App.css';
import Navbar from './component/Navbar';
import MainImage from './component/MainImage';
import WebsiteContent from './component/WebsiteContent';
import ModalDialog from './component/ModalDialog';

function App() {
  return (
    <>
    {/* navbar of a website */}
      <Navbar/>
      {/*  background image */}
      <MainImage/>

      {/* website content */}
      <WebsiteContent/>

      {/* sign up and sign in box */}
      <ModalDialog/>
    </>
  )
}

export default App

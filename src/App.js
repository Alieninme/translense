import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import OurCause from './Pages/OurCause/OurCause';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourcause" element={<OurCause/>} />
      </Routes>
    </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import DisplayOne from './components/DisplayOne';
import Home from './views/Home';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/country/:countryCode' element={<DisplayOne />} />
        

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

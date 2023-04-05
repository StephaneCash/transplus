import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './Main';
import Commander from './components/commander/Commander';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/commander-une-course' element={<Commander />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

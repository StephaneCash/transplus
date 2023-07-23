import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './Main';
import Commander from './components/commander/Commander';
import Collaboration from './components/collaboration/Collaboration';
import Sec from './components/sec/Sec';
import Dispo from './components/dispo/Dispo';
import SignUp from './components/Log/SignUp';
import PageUser from './components/commander/PageUser';
import RoutesPrivate from './RoutesPrivate';
import SignIn from "./components/Log/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RoutesPrivate />}>
          <Route path='/commander-une-course' element={<Commander />} />
        </Route>

        <Route path='/' element={<Main />} />
        <Route path='/collaboration' element={<Collaboration />} />
        <Route path='/security' element={<Sec />} />
        <Route path='/disponibility' element={<Dispo />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/answer' element={<PageUser />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import ReactDOM from "react-router-dom"
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Mainpage from './pages/mainpage/Mainpage';
import Contact from './pages/contactpage/Contact';
import Secretariat from './pages/secretariat/Secretariat';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Mainpage />}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/programare" element={<Secretariat/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {RegisterPage} from "./pages/RegisterPage/RegisterPage.tsx";
import {LoginPage} from "./pages/LoginPage/LoginPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

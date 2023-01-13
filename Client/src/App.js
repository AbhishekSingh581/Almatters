import logo from './logo.svg';
import './App.css';
import MainPage from './components/main';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}>
      </Route>
      <Route path="/feed" element={<MainPage/>} />
      <Route path="/personalInformation" element={<Registration/>} />
      
    </Routes>
  </BrowserRouter>
      {/* <MainPage/> */}
      
    </div>
  );
}

export default App;

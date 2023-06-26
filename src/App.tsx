import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import MainApp from "./pages/MainApp";
import { ChatterProvider } from "./context/ChatterContext";


function App() {
  return (
    <ChatterProvider>
      <Router>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/onboarding' element={<Signup/>}/>
              <Route path="/*" element={<MainApp/>} />
            </Routes>
          </div>
      </Router>
    </ChatterProvider>
  );
}

export default App;

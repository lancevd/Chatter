import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import MainApp from "./pages/MainApp";


function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/onboarding' element={<Signup/>}/>
            <Route path="/app/*" element={<MainApp/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;

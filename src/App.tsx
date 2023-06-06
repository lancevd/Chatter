import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";


function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/onboarding' element={<Signup/>}/>
            <Route path="/feeds/*" element={<Feed/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
